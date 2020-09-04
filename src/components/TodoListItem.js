import React from "react";

const TodoListItem = (props) => {
  const style = {
    color: props.important && "tomato",
  }

  return (
    <span style={style}>{props.label}</span>
  );
}

export default TodoListItem;
