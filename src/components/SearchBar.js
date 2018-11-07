import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class SearchBar extends Component {
  handleChange = event => {
    this.props.handleChange(event.target.value);
  };

  handleSubmit = event => {
    this.props.handleSubmit(event);
  };

  render() {
    // console.log(event)
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="search-sides">
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Search.."
            />
            <Form.Input type="submit" value="Submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
