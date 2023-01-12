import ToDos from './components/toDo';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ToDos listName ={"*Learn React"}></ToDos>
      <ToDos listName ={"*Climb Mt. Everest"}></ToDos>
      <ToDos listName ={"*Run a marathon"}></ToDos>
      <ToDos listName ={"*Feed the dogs"}></ToDos>
    </div>
  );
}

export default App;
