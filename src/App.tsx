import React, { useEffect, useState } from "react";
import "./app.scss";
import DinoWidget from "./Widgets/dinoWidget/dinoWidget";
import FruitsWidget from "./Widgets/fruitsWidget/fruitsWidget";
import AnimalWidget from "./Widgets/animalWidget/AnimalWidget.tsx";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ThemeToggle from "./Widgets/ThemeToggle/ThemeToggle.tsx";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light-mode" | "dark-mode">(
  localStorage.getItem("theme") as "light-mode" | "dark-mode"|| "light-mode"
);


  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme:string) => (prevTheme === "light-mode" ? "dark-mode" : "light-mode"));
  };

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
        <DinoWidget theme={theme} />
      </div>

      {/*Testa remove funktion på fruitsWidget*/}
      <div>
        <h2>Test FruitsWidget + Remove</h2>
        <FruitsWidget theme={theme} />
      </div>

      {/*Testa edit funktion på animalWidget*/}
      <div>
        <h2>Test animalWidget + edit</h2>
        <AnimalWidget theme={theme} />
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
