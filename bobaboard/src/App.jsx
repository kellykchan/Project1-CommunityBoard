import './App.css';
import BobaBoard from './components/Cards.jsx';

const App = () => {

  return (
    <div className="App">
      <h1>🧋 Boba Board 🧋</h1>
      <h2>Welcome to Boba Board! Your go-to guide for discovering the best bubble tea spots around town. Explore hidden gems one boba at a time.</h2>
    
      <BobaBoard />
    </div>
  )
}

export default App