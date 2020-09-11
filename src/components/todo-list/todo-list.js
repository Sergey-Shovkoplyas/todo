import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = (props) => {
  const todos = props.todos;
  const elements = todos.map( (item) => {
    return (
      <li key={item.id} className="list-group-item">
        {/*<TodoListItem { ...item } />*/}
        <TodoListItem
          label={item.label}
          done={item.done}
          important={item.important}
          onDeleted={() => props.onDeleted(item.id)}
          onToggleImportant={() => {props.onToggleImportant(item.id)}}
          onToggleDone={() => {props.onToggleDone(item.id)}}
        />
      </li>
    );
  });


  return (
    <ul className="list-group">
      { elements }
    </ul>
  );
}

export default TodoList;
