import TodoItem from "./todoitem";


const TodoList = ({todos, handleTodoChecked, handleTodoRemoveItems, removeTodo}) => {
    return ( 
        <div className="todo-container">
    <div className="todo-status">
        <h2 id="status">{todos.length > 0 ? `Todos (${todos.length})` : 'Your todo list is empty'}</h2>
    </div>
    <div className="todo-list">
        {
            todos.filter(todo=> todo.completed).length >0 && 
            <button className="remove-completed-list" onClick={handleTodoRemoveItems}>Remove Completed Tasks</button>

        }
            {
                todos.length > 0 ?
                todos.map(todo => <TodoItem key={todo.id} handleTodoChecked={handleTodoChecked} removeTodo={removeTodo} todo={todo} />)
                :
                <div className="no-list"> Todo complete !</div>
            }
    </div> 
   </div>
     );
}
 
export default TodoList;