import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import AllDrinks from './Components/AllDrinks/AllDrinks';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllDrinks></AllDrinks>
      <h1>This is app</h1>
    </div>
  );
}

export default App;
