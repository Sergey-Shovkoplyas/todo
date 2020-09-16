import React from "react";

import "./search-panel.css"

class SearchPanel extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      term: ""
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange (e) {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <div>
        <input
          className="search-input"
          placeholder="search"
          value={this.state.term}
          onChange={this.onSearchChange}/>
        {/*<div>{this.state.term}</div>*/}
      </div>
    );
  }
}

export default SearchPanel;
