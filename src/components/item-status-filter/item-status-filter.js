import React from "react";

import "./item-status-filter.css";

class ItemStatusFilter extends React.Component {
  constructor(props) {
    super(props);

    this.buttons = [
      {name: "all", label: "All"},
      {name: "active", label: "Active"},
      {name: "done", label: "Done"}
    ];
  }

  render() {
    const buttons = this.buttons.map((item) => {
      const isActive = item.name === this.props.filter;
      const clazz = (isActive) ? "btn-info" : "btn-outline-secondary";

      return (
        <button type="button"
                value="all"
                className={`btn ${clazz}`}
                key={item.name}
                onClick={() => this.props.onFilterChange(item.name)}>
          {item.label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

export default ItemStatusFilter;
