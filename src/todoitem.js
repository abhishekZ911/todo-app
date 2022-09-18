import ReactDOM  from "react";
import { useState } from "react";

const TodoItem = ({todo, handleTodoChecked, removeTodo}) => {
  return ( <>
  <div className="entries">
    <input type="checkbox" checked={todo.completed} onChange={() => handleTodoChecked(todo.id, !todo.completed)}/>
    <h3>{todo.text}</h3>
    <h4 className="remove-todo" onClick={() => removeTodo(todo.id)}>X</h4>
  </div>  
  </> );
}
 
export default TodoItem;