import React, { Component } from "react";

class SearchBar extends Component {
  handleChange = event => {
    this.props.handleChange(event.target.value);
  };

  handleSubmit = event => {
    this.props.handleSubmit(event);
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="example"
          action="/action_page.php"
        >
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
