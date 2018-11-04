import React, { Component } from "react";
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
    fetch(
      "http://api.parkwhiz.com/parking/reservation/?key=0255bd8ed81adc912b5d2d720e8dd777e901d81d"
    )
      .then(response => response.json())
      .then(coordData => {
        this.setState({
          FilterResults: coordData
        });
      });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar
          handleLogOut={this.handleLogOut}
          handleProfile={this.handleProfile}
          handleMainPage={this.handleMainPage}
          handleFilterPage={this.handleFilterPage}
        />
        <FilterByCity
          searchResults={this.state.searchResults}
          handleCityChange={this.handleCityChange}
        />
        <FilterResults
          searchResults={this.state.FilterResults}
          filter={this.state.stateFilter}
        />
      </div>
    );
  }
}

export default Filter;
