import './App.css';
import './styles.css';
import { useState } from 'react';
import CreateTodo from './handleCreate';
import TodoList from './ToDoList';

function App() {

const [todos, setTodos] = useState([]);

function handleAddTodo (todo){
    setTodos(prevTodos => [todo, ...prevTodos]);
    console.log({todos});
}


function handleTodoChecked (id,completed){
  setTodos(prevTodos => prevTodos.map(todo => {
    if(todo.id === id) {
      todo.completed = completed;
    }
    console.log(todo.completed);
    return todo;
  }))
};

function handleTodoRemoveItems(){
setTodos(prevTodos => prevTodos.filter(todo=> !todo.completed))
};


function removeTodo(id){
setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
}
  return (
    <div className="App">
      <div className="nav">
      <div className="navbar">
    <nav className="nav-title">
      <div className="title">
        React.js To-Do App         
      </div>
      <CreateTodo handleAddTodo={handleAddTodo} />
    </nav>
    </div>
    </div>
    <TodoList todos={todos} handleTodoRemoveItems={handleTodoRemoveItems} handleTodoChecked={handleTodoChecked} removeTodo={removeTodo}/>
    </div>
  );
}
export default App;
