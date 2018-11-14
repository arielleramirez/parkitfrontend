import React, { Component, Fragment } from "react";
import { Form, Card, Image } from "semantic-ui-react";
import SearchResults from "./SearchResults";
import usermarker from "../img/u.png";
import parkingspacemarker from "../img/marker.png";
import {
  LayersControl,
  BaseLayer,
  Map,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";
import ReservationsList from "./ReservationsList";
import Filter from "./Filter";
import Background from "../img/background.jpg";

const sectionStyle = {
  width: "100%",
  height: "150vh",
  opacity: 0.5,
  position: "absolute",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};

let myIcon = L.icon({
  iconUrl: usermarker,
  iconAnchor: [12.5, 41],
  popupAnchor: [7, -41]
});

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
    fetch("http://localhost:3005/spots")
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
        <Form className="search" onSubmit={this.handleSubmit}>
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
      </Fragment>
    );
  }
}

export default SearchBar;
