import React, { Component, Fragment } from "react";
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

let myIcon1 = L.icon({
  iconUrl: usermarker,
  iconAnchor: [12.5, 41],
  popupAnchor: [7, -41]
});

let myIcon = L.icon({
  iconUrl: parkingspacemarker,
  iconAnchor: [12.5, 41],
  popupAnchor: [7, -41]
});
class CurrentLocation extends Component {
  state = {
    location: {
      lat: 51.505,
      lng: -0.09
    },
    haveUserLocation: false,
    zoom: 2,
    coords: []
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
        <Marker position={newPosition} icon={myIcon1}>
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

  render() {
    const position = [this.state.location.lat, this.state.location.lng];

    return (
      <Fragment>
        <h1 className="banner">Parkit.</h1>
        <div className="map1">
          <Map className="map1" center={position} zoom={this.state.zoom}>
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
        </div>
      </Fragment>
    );
  }
}

export default CurrentLocation;
