import React from "react";
import "./Footer.scss";

type Theme = "light-mode" | "dark-mode";

interface FooterProps {
    title: string;
    subtitle?: string;
    theme: Theme;
    }

const Footer: React.FC<FooterProps> = ({ 
    title = "Default footer text", 
    subtitle,
    theme = "light-mode" 
}) => {
  return (
    <div className={`Footer ${theme}`}>
      <h1>{title}</h1>
        {subtitle &&<h2>{subtitle}</h2>}
    </div>
  );
};



export default Footer;
