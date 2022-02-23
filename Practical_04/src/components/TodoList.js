import React from "react";

import "../App.css";

function TodoList(props) {
  return (
    <>
      <div className="todo_style">
        <li>{props.todo}</li>
        <i className="fa fa-times" />
      </div>
    </>
  );
}

export default TodoList;
