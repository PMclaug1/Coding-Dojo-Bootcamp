
import './App.css';
import ToDos from 'client\components\ToDos.jsx';

function App() {
  return (
    <div className="App">
      <h1>Dojo Dinner Menu</h1>
      <h1>Menu</h1>
      <ToDos dishName={"Tacos"} price={2.50}>
        <p>It's good</p>
        <em>Note: Beef, lettuce, onions, tomatoes, onions, cilantro</em>
      </ToDos>
    </div>
  );
}

export default App;
