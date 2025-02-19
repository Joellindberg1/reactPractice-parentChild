import React from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "primary" }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
