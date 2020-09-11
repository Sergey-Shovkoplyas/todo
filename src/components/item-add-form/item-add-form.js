import React from "react"

import "./item-add-form.css"

class ItemAddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onItemAdded('some custom text')}
          className="btn btn-secondary add-btn">
          Add item
        </button>
      </div>
    );
  }
}

export default ItemAddForm;
