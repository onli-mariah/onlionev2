import React from "react";
import styles from "./ColumnPill.module.css";

interface ColumnPillProps {
  label: string;
  theme?: "light" | "dark";
  showArrow?: boolean;
  capitalized?: boolean;
  collapsed?: boolean;
}

export default function ColumnPill({ label, theme = "light", showArrow = false, capitalized = false, collapsed = false }: ColumnPillProps) {
  const isDark = theme === "dark";
  
  return (
    <div className={`${isDark ? styles.pillDark : styles.pill} ${collapsed ? styles.pillCollapsed : ''}`} title={collapsed ? label : undefined}>
      <span className={`${isDark ? styles.labelDark : styles.label} ${capitalized ? styles.labelCapitalized : ''} ${collapsed ? styles.labelCollapsed : ''}`}>
        {label}
      </span>
      {showArrow && !collapsed && (
        <span className={isDark ? styles.labelDark : styles.label}>
          &rarr;
        </span>
      )}
    </div>
  );
}
