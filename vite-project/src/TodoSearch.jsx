import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch({bgColor,color,handleAddTodo}) {
  const [todoInput, setTodoInput] = useState('');
  const handleTextChange = (e) =>{
    const safeUseText = e.target.value
    setTodoInput(safeUseText)
    console.log(todoInput)
  }
  return (
    <div style={{backgroundColor: bgColor}} className="todo-search">
      <div  className="tick-circle"  onClick={()=> handleAddTodo(todoInput)}></div>
      <input value={todoInput} style={{color: color}} type="text" onChange={handleTextChange} placeholder="Create a new todo..." />
    </div>
  );
}

export default TodoSearch;
