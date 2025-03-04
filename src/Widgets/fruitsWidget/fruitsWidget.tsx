import  { useState } from "react";
import Button from "../../Components/Button/Button";
import "./fruitsWidget.scss"; 

interface FruitsWidgetProps {
  theme: "light-mode" | "dark-mode";
}

const FruitsWidget:React.FC <FruitsWidgetProps> = ({theme}) => {
  const [fruits, setFruits] = useState<string[]>([
    "🍎 Apple",
    "🍌 Banana",
    "🍇 Grapes",
    "🍊 Orange",
    "🍉 Watermelon",
  ]);

  const removeFruit = (fruit: string) => {
    setFruits(fruits.filter((f) => f !== fruit));
  };

  return (
    <div className={`fruits-widget ${theme}`}>
      <h2>Fruit List 🍏</h2>
      {fruits.length > 0 ? (
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {fruit}
              <Button text="Remove" onClick={() => removeFruit(fruit)} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No more fruits left! 🫣</p>
      )}
    </div>
  );
};

export default FruitsWidget;
