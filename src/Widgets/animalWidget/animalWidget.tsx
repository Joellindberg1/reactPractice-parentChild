import  { useState } from "react";
import "./animalWidget.scss"; // Använd CSS-modul
import Button from "../../Components/Button/Button";

export type AnimalType = {
  name: string;
  emoji: string;
  speed: number;
};

interface AnimalWidgetProps {
  theme: "light-mode" | "dark-mode";
}


const AnimalWidget: React.FC<AnimalWidgetProps> = ({theme}) => {
  const [animals, setAnimals] = useState<AnimalType[]>([
    { emoji: "🐋", name: "Blåval", speed: 40 },
    { emoji: "🐸", name: "Pilgiftsgroda", speed: 12 },
    { emoji: "🦦", name: "Havsutter", speed: 25 },
    { emoji: "🦑", name: "Axolotl", speed: 13 },
    { emoji: "🌊", name: "Manet", speed: 25 },
    { emoji: "🦜", name: "Kakadua", speed: 30 },
    { emoji: "🐆", name: "Snöleopard", speed: 58 },
    { emoji: "🐿", name: "Ekorre", speed: 20 },
  ]);

  const [editingAnimal, setEditingAnimal] = useState<AnimalType | null>(null);
  const [editName, setEditName] = useState("");
  const [editSpeed, setEditSpeed] = useState<number>(0);

  const startEditing = (animal: AnimalType) => {
    setEditingAnimal(animal);
    setEditName(animal.name);
    setEditSpeed(animal.speed);
  };

  const saveEdit = () => {
    setAnimals(
      animals.map((animal) =>
        animal.name === editingAnimal?.name
          ? { ...animal, name: editName, speed: editSpeed }
          : animal
      )
    );
    setEditingAnimal(null);
  };

  const cancelEdit = () => {
    setEditingAnimal(null);
  };

  return (
    <div className={`animalsWidget ${theme}`}>
      <h2>Animal List 🦡</h2>
      <div className="animalGrid">
        {animals.map((animal) => (
          <div key={animal.name} className="animalCard">
            <span className="emoji">{animal.emoji}</span>
            {editingAnimal?.name === animal.name ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="input"
                />
                <input
                  type="number"
                  value={editSpeed}
                  onChange={(e) => setEditSpeed(Number(e.target.value))}
                  className="input"
                />
                <Button text="Save" onClick={saveEdit} />
                <Button text="Cancel" onClick={cancelEdit} />
              </>
            ) : (
              <>
                <h3>{animal.name}</h3>
                <p>Speed: {animal.speed} km/h</p>
                <Button text="Edit" onClick={() => startEditing(animal)} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalWidget;
