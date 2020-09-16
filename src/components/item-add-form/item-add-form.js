import React from "react"

import "./item-add-form.css"

class ItemAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemText: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange(e) {
    this.setState({
      itemText: e.target.value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.itemText) {
      this.props.onItemAdded(this.state.itemText)
      this.setState({
        itemText: ''
      });
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          className="add-item-form d-flex"
        >
          <input
            onChange={this.onItemChange}
            className="add-item-input form-control"
            type="text"
            placeholder="What should be done?"
            value={this.state.itemText}/>

          <button
            className="btn btn-secondary add-btn">
            Add item
          </button>
        </form>

        {/*<div>{this.state.itemText}</div>*/}
      </div>
    );
  }
}

export default ItemAddForm;
