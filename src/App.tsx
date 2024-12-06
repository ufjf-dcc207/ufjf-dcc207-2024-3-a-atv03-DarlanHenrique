import './App.css'
import Animal from './Animal'
import Exhibition from './Exhibition'

function App() {
  return (
      <div className='app'>
        <Exhibition start={new Date("2024-12-06T08:00:00-03:00")} end={new Date("2024-12-06T12:00:00-03:00")} location='A1' />
        <Animal icon="🐘" name="Elefante" weight={5400} />
        <Animal icon="🦖" name="Dinossauro" weight={-1} extinct />
        <Animal icon="🦒" name="Girafa" weight={800} />
        <hr />
        <Exhibition start={new Date("2024-12-06T13:00:00-03:00")} end={new Date("2024-12-06T17:00:00-03:00")} location='B1' />
        <Animal icon="🦁" name="Leão" weight={190.37} />
        <Animal icon="🐬" name="Golfinho-do-rio-chinês" weight={67.43} extinct />
      </div>
  )
}
export default App