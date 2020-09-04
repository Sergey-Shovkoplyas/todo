import React from "react";
import ReactDom from 'react-dom';

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import todoData from "./fixture/todoData";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
}

ReactDom.render(<App />,
  document.getElementById('root'));

