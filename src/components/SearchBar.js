import React, { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";
import SearchResults from "./SearchResults";

class SearchBar extends Component {
  state = {
    location: "",
    locationResult: [],
    lat: [],
    lng: []
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    fetch("http://localhost:3000/spots")
      .then(response => response.json())
      .then(spaceData => {
        const space = spaceData.filter(spaced => {
          return spaced.location_name.includes(this.state.location);
        });

        if (space) {
          this.setState({
            locationResult: space
          });
        }
      });
  };

  render() {
    console.log(this.state.locationResult);
    console.log(this.state.lat);
    console.log(this.state.lng);
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} className="searchBar">
          <Form.Group>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Search.."
              name="location"
              value={this.state.location}
            />
            <Form.Input type="submit" value="Submit" />
          </Form.Group>
        </Form>
        <SearchResults locationResults={this.state.locationResult} />
      </Fragment>
    );
  }
}

export default SearchBar;
