"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UAParser } from 'ua-parser-js';

// Breakpoints matching CSS
const BREAKPOINTS = {
  mobile: 767,
  tablet: 1024,
  desktop: 1025,
} as const;

export interface ViewportInfo {
  // Dimensions
  width: number;
  height: number;
  
  // Breakpoint flags
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  
  // Browser info
  browser: {
    name: string;
    version: string;
    isSafari: boolean;
    isChrome: boolean;
    isFirefox: boolean;
    isEdge: boolean;
    isIE: boolean;
  };
  
  // OS info
  os: {
    name: string;
    version: string;
    isIOS: boolean;
    isAndroid: boolean;
    isMacOS: boolean;
    isWindows: boolean;
  };
  
  // Device info
  device: {
    type: string;
    isTouchDevice: boolean;
  };
  
  // Feature support
  features: {
    supportsSVGMasks: boolean;
    supportsBackdropFilter: boolean;
    supportsStickyPosition: boolean;
    prefersReducedMotion: boolean;
  };
  
  // Ready state
  isHydrated: boolean;
}

const defaultViewport: ViewportInfo = {
  width: 1200,
  height: 800,
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  browser: {
    name: '',
    version: '',
    isSafari: false,
    isChrome: false,
    isFirefox: false,
    isEdge: false,
    isIE: false,
  },
  os: {
    name: '',
    version: '',
    isIOS: false,
    isAndroid: false,
    isMacOS: false,
    isWindows: false,
  },
  device: {
    type: 'desktop',
    isTouchDevice: false,
  },
  features: {
    supportsSVGMasks: true,
    supportsBackdropFilter: true,
    supportsStickyPosition: true,
    prefersReducedMotion: false,
  },
  isHydrated: false,
};

const ViewportContext = createContext<ViewportInfo>(defaultViewport);

export function ViewportProvider({ children }: { children: ReactNode }) {
  const [viewport, setViewport] = useState<ViewportInfo>(defaultViewport);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parser = new UAParser();
    const result = parser.getResult();
    
    const browserName = result.browser.name?.toLowerCase() || '';
    const osName = result.os.name?.toLowerCase() || '';
    
    // Detect browser
    const browserInfo = {
      name: result.browser.name || '',
      version: result.browser.version || '',
      isSafari: browserName.includes('safari') && !browserName.includes('chrome'),
      isChrome: browserName.includes('chrome') && !browserName.includes('edge'),
      isFirefox: browserName.includes('firefox'),
      isEdge: browserName.includes('edge'),
      isIE: browserName.includes('ie') || browserName.includes('internet explorer'),
    };
    
    // Detect OS
    const osInfo = {
      name: result.os.name || '',
      version: result.os.version || '',
      isIOS: osName.includes('ios'),
      isAndroid: osName.includes('android'),
      isMacOS: osName.includes('mac'),
      isWindows: osName.includes('windows'),
    };
    
    // Detect device
    const deviceType = result.device.type || 'desktop';
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Feature detection
    const testSVGMasks = () => {
      // Safari has issues with SVG masks in certain configurations
      if (browserInfo.isSafari) {
        // Check Safari version - masks work better in Safari 15+
        const version = parseFloat(browserInfo.version);
        return version >= 15;
      }
      return true;
    };
    
    const testBackdropFilter = () => {
      const el = document.createElement('div');
      el.style.cssText = 'backdrop-filter: blur(1px); -webkit-backdrop-filter: blur(1px)';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return el.style.backdropFilter !== '' || (el.style as any).webkitBackdropFilter !== '';
    };
    
    const testStickyPosition = () => {
      const el = document.createElement('div');
      el.style.cssText = 'position: sticky; position: -webkit-sticky';
      return el.style.position.includes('sticky');
    };
    
    const testReducedMotion = () => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };
    
    const features = {
      supportsSVGMasks: testSVGMasks(),
      supportsBackdropFilter: testBackdropFilter(),
      supportsStickyPosition: testStickyPosition(),
      prefersReducedMotion: testReducedMotion(),
    };
    
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setViewport({
        width,
        height,
        isMobile: width <= BREAKPOINTS.mobile,
        isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
        isDesktop: width >= BREAKPOINTS.desktop,
        browser: browserInfo,
        os: osInfo,
        device: {
          type: deviceType,
          isTouchDevice,
        },
        features,
        isHydrated: true,
      });
    };
    
    // Initial update
    updateDimensions();
    
    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateDimensions, 100);
    };
    
    // Also handle orientation change for mobile
    const handleOrientationChange = () => {
      setTimeout(updateDimensions, 100);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Listen for reduced motion preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => {
      setViewport(prev => ({
        ...prev,
        features: {
          ...prev.features,
          prefersReducedMotion: motionQuery.matches,
        },
      }));
    };
    motionQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
}

export function useViewport() {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error('useViewport must be used within a ViewportProvider');
  }
  return context;
}

// Utility hook for checking specific breakpoints
export function useBreakpoint() {
  const { isMobile, isTablet, isDesktop } = useViewport();
  return { isMobile, isTablet, isDesktop };
}

// Utility hook for browser detection
export function useBrowser() {
  const { browser } = useViewport();
  return browser;
}

// Utility hook for feature detection
export function useFeatures() {
  const { features } = useViewport();
  return features;
}
