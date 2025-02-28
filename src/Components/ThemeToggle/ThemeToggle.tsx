import React from "react";
import "./ThemeToggle.scss";


interface ThemeToggleProps {
  theme: "light-mode" | "dark-mode";
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <label className="theme-switch">
      <input type = "checkbox" onChange = {toggleTheme} checked = {theme === "dark-mode"} />
      <span className = "slider"></span>
    </label>
  );
};

export default ThemeToggle;
