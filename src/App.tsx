import "./App.css";
import Animal from "./Animal";
import Exhibition from "./Exhibition";

type ExhibitionTuplaType = [string, string, string, AnimalTuplaType[]];
type AnimalTuplaType = [string, string, number, boolean];

const ANIMAIS: AnimalTuplaType[] = [
  ["🦅", "Águia", 6.35, false],
  ["🐘", "Elefante", 5400, false],
  ["🦒", "Girafa", 800, false],
  ["🦔", "Porco-espinho", 5.0, false],
  ["🦖", "Dinossauro", -1, true],
  ["🦁", "Leão", 190.37, false],
  ["🦏", "Rinoceronte", 2300, false],
  ["🐬", "Golfinho-do-rio-chinês", 67.43, true],
];

const exA1: AnimalTuplaType[] = ANIMAIS.filter((animal) => animal[2] < 500 && animal[2] > 0);
const exB1: AnimalTuplaType[] = ANIMAIS.filter((animal) => animal[2] >= 500)
const exC1: AnimalTuplaType[] = ANIMAIS.filter((animal) => animal[2] < 0 || animal[3]);

const EXHIBITION: Array<ExhibitionTuplaType> = [
    ["2024-12-06T08:00:00-03:00", "2024-12-06T12:00:00-03:00", "A1", exA1],
    ["2024-12-06T13:00:00-03:00", "2024-12-06T17:00:00-03:00", "B1", exB1],
    ["2024-12-06T18:00:00-03:00", "2024-12-06T22:00:00-03:00", "C1", exC1],
];

function App() {
  return (
    <div className="app">
      <h1>Exposição de Animais</h1>
      {EXHIBITION.map((exhibition) =>(
        <Exhibition
          key={exhibition[2]}
          start={new Date(exhibition[0])}
          end={new Date(exhibition[1])}
          location={exhibition[2]}
      >
        {exhibition[3].map((animal) => <Animal
          key={animal[1]}
          icon={animal[0]}
          name={animal[1]}
          weight={animal[2]}
          extinct={animal[3]}
        />
      )}
      </Exhibition>
      ))}
    </div>
  );
}
export default App;
