import { useState } from "react";
import Button from "../../Components/Button";
import "./dinoWidget.scss";

const DinoWidget = () => {
  const [dinosaurs, setDinosaurs] = useState<string[]>([]);
  const [dino, setDino] = useState<string>("");

  const addDino = () => {
    if (dino.trim() === "" || dinosaurs.includes(dino)) return;
    setDinosaurs([...dinosaurs, dino]);
    setDino("");
  };

  return (
    <div className="dino-widget">
      <h2>Add a Dinosaur 🦖</h2>
      <input
        type="text"
        value={dino}
        onChange={(e) => setDino(e.target.value)}
        placeholder="Enter dinosaur name"
      />
      <Button text="Add" onClick={addDino} type="primary" />

      <h3>Current Dinosaurs:</h3>
      <ul>
        {dinosaurs.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default DinoWidget;
