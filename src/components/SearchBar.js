import React, { Component, Fragment } from "react";
import { Form, Card, Image } from "semantic-ui-react";
import SearchResults from "./SearchResults";

class SearchBar extends Component {
  state = {
    location: "",
    locationResult: []
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    fetch(
      `http://api.parkwhiz.com/parking/reservation/?key=0255bd8ed81adc912b5d2d720e8dd777e901d81d`
    )
      .then(response => response.json())
      .then(spaceData => {
        const space = spaceData.filter(space => {
          return space.location_name.includes(this.state.location);
        });

        if (space) {
          // space.map(parking => {
          console.log(spaceData);
          this.setState({
            locationResult: space
          });
          // });
        }
      });
  };

  render() {
    console.log(this.state.locationResult);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="search-sides">
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
      </div>
    );
  }
}

export default SearchBar;
