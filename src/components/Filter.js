import React, { Component, Fragment } from "react";
import FilterByCity from "./FilterByCity";
import FilterResults from "./FilterResults";
import NavBar from "./NavBar";
import { Card } from "semantic-ui-react";

class Filter extends Component {
  state = {
    location: {
      lat: 51.505,
      lng: -0.09
    },
    searchResults: [],
    searchBar: "",
    haveUserLocation: false,
    zoom: 2,
    searchBar: "",
    coords: [],
    stateFilter: [],
    reservedRes: [],
    // isLoaded: false,
    searchInput: "",
    FilterResults: []
  };

  handleCityChange = filter => {
    this.setState({
      stateFilter: filter
    });
  };

  handleReservation = id => {
    let reserveRes = this.state.searchResults.find(space => {
      return space.location_id == id;
    });
    // console.log("hey", reserveRes);
    this.setState(
      preState => ({
        reservedRes: [...preState.reservedRes, reserveRes],
        isLoaded: true
      }),
      () => {
        // console.log("new state", this.state);
      }
    );
  };
  componentDidMount() {
    fetch("http://localhost:3005/spots")
      .then(response => response.json())
      .then(coordData => {
        this.setState({
          FilterResults: coordData
        });
      });
  }

  render() {
    console.log(this.state.FilterResults);
    return (
      <Fragment>
        <FilterByCity handleCityChange={this.handleCityChange} />
        <FilterResults
          searchResults={this.state.FilterResults}
          filter={this.state.stateFilter}
        />
      </Fragment>
    );
  }
}

export default Filter;
