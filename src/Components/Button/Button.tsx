import React from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  theme?: "light-mode" | "dark-mode";
}


const Button: React.FC<ButtonProps> = ({ text, onClick,theme }) => {
  return (
    <button className={`button ${theme}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
