import './App.css'
import Animal from './Animal'

function App() {
  return (
      <div className='app'>
        <Animal icon="🦖" name="Dinossaur" weight={530} extinct={true} />
        <Animal icon="🦁" name="Lion" weight={120} extinct={false} />
      </div>
  )
}
export default App