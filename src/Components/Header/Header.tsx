import React from "react";
import "./Header.scss";

type Theme = "light-mode" | "dark-mode";

interface HeaderProps {
    title: string;
    subtitle?: string;
    theme?: Theme;
    }

const Header: React.FC<HeaderProps> = ({ 
    title = "Default header text", 
    subtitle,
    theme = "light-mode" //Standardvärde, om inget annat anges
}) => {
  return (
    <div className={`Header ${theme}`}>
      <h1>{title}</h1>
        {subtitle &&<h2>{subtitle}</h2>}
    </div>
  );
};



export default Header;
