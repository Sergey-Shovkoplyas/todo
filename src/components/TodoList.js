import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const todos = props.todos;
  const elements = todos.map( (item) => {
    return (
      <li key={item.id}>
        {/*<TodoListItem { ...item } />*/}

        <TodoListItem
          label={item.label}
          important={item.important}
        />
      </li>
    );
  });

  console.log(todos);

  return (
    <ul>
      { elements }
    </ul>
  );
}

export default TodoList;
