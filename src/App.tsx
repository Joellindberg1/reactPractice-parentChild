import "./app.scss";
import DinoWidget from "./Widgets/dinoWidget/dinoWidget";
import FruitsWidget from "./Widgets/fruitsWidget/fruitsWidget";

const App = () => {
  return (
    <div>
      <h1>React Widget Tester</h1>

      {/* 🦖 Testa add funktion på dinoWidget  */}
      <div>
        <h2>Test DinoWidget + Add</h2>
        <DinoWidget />
      </div>

      {/* 🍏 Testa remove funktion på fruitsWidget */}
      <div>
        <h2>Test FruitsWidget + Remove</h2>
        <FruitsWidget />
      </div>

    </div>
  );
};

export default App;
