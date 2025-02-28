import React, { useEffect, useState } from "react";
import "./app.scss";
import DinoWidget from "./Widgets/dinoWidget/dinoWidget";
import FruitsWidget from "./Widgets/fruitsWidget/fruitsWidget";
import AnimalWidget from "./Widgets/animalWidget/animalWidget";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ThemeToggle from "./Components/ThemeToggle/ThemeToggle.tsx";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light-mode" | "dark-mode">("light-mode");

  const toggleTheme = () => {
    setTheme((prevTheme:string) => (prevTheme === "light-mode" ? "dark-mode" : "light-mode"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (

    <div>
      <div>
        <Header title="This is the header for this widget tester" 
        subtitle="You are welcome to try the diffrent widgets!"
        theme = {theme}
        />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        
      </div>

      {/*Testa add funktion på dinoWidget*/}
      <div>
        <h2>Test DinoWidget + Add</h2>
        <DinoWidget />
      </div>

      {/*Testa remove funktion på fruitsWidget*/}
      <div>
        <h2>Test FruitsWidget + Remove</h2>
        <FruitsWidget />
      </div>

      {/*Testa edit funktion på animalWidget*/}
      <div>
        <h2>Test animalWidget + edit</h2>
        <AnimalWidget />
      </div>

      <div>
        <Footer title="This is a footer for this widget tester"
        subtitle = "Hope you enjoy the widgets!"
        theme = {theme}
        />
        
      </div>

    </div>
  );
};

export default App;
