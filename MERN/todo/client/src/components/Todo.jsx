const Todo = (props) => {
    const todoClasses = [];
        if (props.todo.complete) {
            todoClasses.push("text-decoration-line-through")
        }
    
    return <div>
            <br></br>
            <input onChange={(event) => {
                props.toggleComplete(props.idx);
            }} 
            checked={props.todo.complete} 
            type="checkbox"></input>
            <span className={todoClasses.join(" ")}>{props.todo.text} &nbsp; </span>
            <button className='btn btn-danger' onClick={(event) => {
                props.todoDelete(props.idx);}}>Delete</button>
            </div>
}

export default Todo;