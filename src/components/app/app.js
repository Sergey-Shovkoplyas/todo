import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import todoData from "../../fixture/todoData";

import "./app.css"

class App extends React.Component {
  maxId = 100;

  constructor(props) {
    super(props);

    this.state = {
      asd: "asd",
      todoData: todoData
    }


    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.toggleProperty = this.toggleProperty.bind(this);
  }

  deleteItem(id) {
    this.setState((state) => {

      const ind = state.todoData.findIndex( (el) => el.id === id );

      const newArr = [
        ...state.todoData.slice(0, ind),
        ...state.todoData.slice(ind + 1),
      ];

      return {
        todoData: newArr
      };

    });
  }

  addItem(text) {
    const newItem = {
      label: 'New Item',
      important: false,
      done: false,
      id: this.maxId++
    }

    console.log(newItem);

    this.setState((state) => {
      const newArr = [
        ...state.todoData,
        newItem
      ]

      return {
        todoData: newArr
      }
    });
  }

  toggleProperty(arr, id, propName) {
    const ind = arr.findIndex( (el) => el.id === id );

    const oldItem = arr[ind];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    const newArr = [
      ...arr.slice(0, ind),
      newItem,
      ...arr.slice(ind + 1),
    ];

    return newArr
  }

  onToggleImportant(id) {
    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id, 'important')
      };
    });
  }

  onToggleDone(id) {
    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id, 'done')
      };
    });
  }


  render () {

    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="d-flex justify-content-between mb-3">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

          <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
}

export default App;
