import ReactDOM  from "react-dom";
import { useMemo, useState } from "react";
import TodoItem from "./todoitem";
import { v4 as genUUID4 } from 'uuid';




const CreateTodo = ({handleAddTodo}) => {

const [entry, setEntry] = useState('');  
const [btnFn, setbtnFn] = useState('Create to-do');
const [bool, setBool] = useState(false);


const newTodo = useMemo(() => {
  return {
    id: genUUID4(),
    text: entry,
    completed : false
  };
});

  function handleCreateTodo(e){

    var nav = document.getElementsByClassName("nav");
    var navParent = document.getElementsByClassName("navbar")[0];
    if(btnFn === 'Close-menu')
    {
      setBool(false);
      setbtnFn('Create to-do');
      nav[0].classList.remove('nav-on-click');
      navParent.classList.remove('navbar-on-click');
    }

    else{
      navParent.classList.add('navbar-on-click');
      setBool(true);
      setbtnFn('Close-menu');
      nav[0].classList.add('nav-on-click');
      
    };
  }
  
 function handleSubmit(e){
  e.preventDefault();
      handleAddTodo(newTodo);
      console.log(newTodo);
      setEntry('');
}



  return (<>
    <button onClick={handleCreateTodo} className="reset-btn">{btnFn}</button>   
      {bool && (ReactDOM.createPortal(<div className="entry">
       <form onSubmit={handleSubmit}> 
        <input required 
        className="input-todo"
        type="text" 
        value={entry}
        placeholder="Enter task"
        onChange={(e) => {setEntry(e.target.value)}}/>
        </form>
        <button onClick={handleSubmit} className="submit">Submit</button>
      </div>, document.getElementsByClassName('nav')[0])) }
    </>
    )

    
}
 
export default CreateTodo;