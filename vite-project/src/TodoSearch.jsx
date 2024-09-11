import React from "react";
import "./TodoSearch.css";

function TodoSearch({bgColor,color}) {
  return (
    <div style={{backgroundColor: bgColor}} className="todo-search">
      <div className="tick-circle"></div>
      <input style={{color: color}} type="text" placeholder="Create a new todo..." />
    </div>
  );
}

export default TodoSearch;
