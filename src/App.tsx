import "./App.css";
import Animal from "./Animal";
import Exhibition from "./Exhibition";
import { ReactNode } from "react";

type animalType = [string, string, number, boolean];

const ANIMAIS: animalType[] = [
  ["🦅", "Águia", 6.35, false],
  ["🐘", "Elefante", 5400, false],
  ["🦒", "Girafa", 800, false],
  ["🦔", "Porco-espinho", 5.0, false],
  ["🦖", "Dinossauro", -1, true],
  ["🦁", "Leão", 190.37, false],
  ["🦏", "Rinoceronte", 2300, false],
  ["🐬", "Golfinho-do-rio-chinês", 67.43, true],
];

function App() {
  const exA1: ReactNode[] = [];
  const exB1: ReactNode[] = ANIMAIS.map((animal) => <Animal
      key={animal[1]}
      icon={animal[0]}
      name={animal[1]}
      weight={animal[2]}
      extinct={animal[3]}
    />
  );

  return (
    <div className="app">
      <Exhibition
        start={new Date("2024-12-06T08:00:00-03:00")}
        end={new Date("2024-12-06T12:00:00-03:00")}
        location="A1"
      >
        {exA1}
      </Exhibition>

      <Exhibition
        start={new Date("2024-12-06T13:00:00-03:00")}
        end={new Date("2024-12-06T17:00:00-03:00")}
        location="B1"
      >
        {exB1}
      </Exhibition>
    </div>
  );
}
export default App;
