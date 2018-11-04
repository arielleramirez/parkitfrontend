import React, { Component, Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import NavBar from "./NavBar";
import { createUser } from "../actions/SignUp";
import { connect } from "react-redux";
import NavButtons from "./NavButtons";
import iconUrl from "../u.png";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { ReactLeafletSearch } from "react-leaflet-search";

let myIcon = L.icon({
  iconUrl,
  iconAnchor: [12.5, 41],
  popupAnchor: [7, -41]
});

class MainPage extends Component {
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
    searchInput: ""
  };

  componentDidMount() {
    fetch(
      "http://api.parkwhiz.com/parking/reservation/?key=0255bd8ed81adc912b5d2d720e8dd777e901d81d"
    )
      .then(response => response.json())
      .then(coords => {
        this.setState({
          coords: coords,
          isLoaded: true
        });
      });
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          haveUserLocation: true,
          zoom: 16
        });
      },
      () => {
        fetch("https://ipapi.co/json")
          .then(response => response.json())
          .then(locationData => {
            this.setState({
              location: {
                lat: locationData.latitude,
                lng: locationData.longitude
              },
              haveUserLocation: true,
              zoom: 16
            });
          });
      }
    );
  }

  renderEachCoordinatePosition = stateObj => {
    return this.state.coords.map(cord => {
      var newPosition = [cord.lat, cord.lng];
      return (
        <Marker position={newPosition} icon={myIcon}>
          <Popup>
            <div className="pop">
              {cord.location_name}
              <br />
              {this.props.address}
              <br />
              {this.props.city}
            </div>
          </Popup>
        </Marker>
      );
    });
  };

  handleChange = input => {
    this.setState({
      searchBar: input
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(
      "http://api.parkwhiz.com/parking/reservation/?key=0255bd8ed81adc912b5d2d720e8dd777e901d81d"
    )
      .then(response => response.json())
      .then(coordData => {
        this.setState({
          searchResults: coordData
        });
      });
  };

  handleLogOut = event => {
    this.props.createUser(null);
    this.props.history.push("/");
    console.log(this.props.currentUserId);
  };

  handleProfile = () => {
    this.props.history.push("/profile");
  };

  handleMainPage = () => {
    this.props.history.push("/mainpage");
  };

  handleFilterPage = () => {
    this.props.history.push("/filter");
  };

  render() {
    console.log(this.state);
    const position = [this.state.location.lat, this.state.location.lng];
    // console.log("main page state", this.state.reservedRes);
    return (
      <div>
        <NavBar
          handleLogOut={this.handleLogOut}
          handleProfile={this.handleProfile}
          handleMainPage={this.handleMainPage}
          handleFilterPage={this.handleFilterPage}
        />
        <Map className="map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.haveUserLocation ? (
            <Marker position={position} icon={myIcon}>
              <Popup>Your current location</Popup>
            </Marker>
          ) : (
            ""
          )}
          {this.renderEachCoordinatePosition()}
        </Map>

        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <SearchResults
          searchResults={this.state.searchResults}
          coords={this.state.coords}
          filter={this.state.stateFilter}
          handleReservation={this.handleReservation}
          filterSearch={this.filterSearch}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ currentUser: state.currentUser }),
  {
    createUser
  }
)(MainPage);

// handleCityChange = filter => {
//   this.setState({
//     stateFilter: filter
//   });
// };
//
// handleReservation = id => {
//   let reserveRes = this.state.coords.find(space => {
//     return space.location_id == id;
//   });
//   console.log("hey", reserveRes);
//   this.setState(
//     preState => ({
//       reservedRes: [...preState.reservedRes, reserveRes],
//       isLoaded: true
//     }),
//     () => {
//       console.log("new state", this.state);
//     }
//   );
// };
//
// filterSearch = input => {
//   console.log("this is state before", this.state.searchInput);
//   this.setState({
//     searchInput: input
//   });
// };
// <FilterByCity
// handleCityChange={this.handleCityChange}
// coords={this.state.coords}
// filter={this.state.stateFilter}
// />
