import React from "react";
import "./TodoFooter.css";
function TodoFooter() {
  return (
    <div className="todo-footer">
      <button className="active">All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}

export default TodoFooter;
