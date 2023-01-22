import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Todo from "./components/Todo.jsx"

function App() {
  // destructred to:
  // const newTodoStateArr = useState ("")
  // const newTodo = newTodoStateArr[0]
  // const setNewTodo = newTodoStateArr[1]
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

const newTodoSubmit = (event) => {
  event.preventDefault();
// will not add new items with no characters in submission
  if (newTodo.length === 0){
    return;
  }

  const todoItem = {
    text: newTodo,
    complete: false
  }
  // adds all current todos + the new todo
  setTodos([...todos, todoItem]);
  setNewTodo("");
};

  const todoDelete = (delIdx) => {
    // index is always 2nd position w/ filter. needs 1st parameter. Can add underscore to mark that it is not used.
    const filteredTodos = todos.filter((_todo, idx) => {
      return idx != delIdx;
    });

    setTodos(filteredTodos)
  }

  const toggleComplete = (i) => {
    const updatedTodos = todos.map((todo, idx) => {
      if (i === idx) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <br></br>
      <form className='form-group' 
      onSubmit={(event) => {
        newTodoSubmit(event);
      }}>
        <input className='form-control' 
        onChange={(event) =>{
          setNewTodo(event.target.value);
        }} type="text" value={newTodo}>
        </input>
        <div>
          <br></br>
          <button className='btn btn-primary'>Add</button>
        </div>
      </form>


      {todos.map((todo, idx) => {
          return <Todo key={idx} todo={todo} toggleComplete={toggleComplete} idx={idx}
          todoDelete={todoDelete}
          />
        })}
    </div>
  );
}

export default App;
