import React from "react";

import "./todo-list-item.css"

class TodoListItem extends React.Component {

  render() {
    let classNames = "todo-list-item";

    if (this.props.done) {
      classNames += " done"
    }

    if (this.props.important) {
      classNames += " important"
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.props.onToggleDone }>
          {this.props.label}
        </span>

         <button type="button"
                 className="btn btn-outline-success btn-sm float-right"
                  onClick={ this.props.onToggleImportant  }>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ this.props.onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
