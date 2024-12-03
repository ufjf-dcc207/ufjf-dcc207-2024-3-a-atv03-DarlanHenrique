import './App.css'
import Animal from './Animal'

function App() {
  return (
      <div className='app'>
        <Animal icon="🦖" name="Dinossauro" weight={-1} extinct />
        <Animal icon="🦁" name="Leão" weight={190.37} />
        <Animal icon="🐬" name="Golfinho-do-rio-chinês" weight={67.43} extinct />
      </div>
  )
}
export default App