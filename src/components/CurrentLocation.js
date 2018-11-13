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
import { Card, Button } from "semantic-ui-react";
import CurrentLocationResults from "./CurrentLocationResults";
import Background from "../img/background3.jpg";

const sectionStyle = {
  width: "100%",
  height: "92vh",
  position: "absolute",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundColor: "white",
  backgroundImage: `url(${Background})`,
  zIndex: -9,
  position: "relative",
  opacity: 0.75
};

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
    coords: [],
    newData: []
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

  onReserve = event => {
    fetch(`http://localhost:3001/api/v1/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.newData.user_id,
        parkingspace_id: this.state.newData.parkingspace_id,
        name: this.state.newData.location_name,
        street: this.state.newData.address,
        city: this.state.newData.city,
        state: this.state.newData.state,
        zip: this.state.newData.zip,
        lng: this.state.newData.lng,
        lat: this.state.newData.lat
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          reserveSpot: data,
          isReserved: true
        });
      });
  };

  renderEachCoordinatePosition = stateObj => {
    return this.state.coords.map(cord => {
      var newPosition = [cord.lat, cord.lng];

      return (
        <Marker position={newPosition} icon={myIcon1}>
          <Popup>
            <Card.Content style={{ paddingLeft: 20 }}>
              <Card.Header style={{ fontSize: 25 }}>
                {cord.location_name}
              </Card.Header>
              <Card.Description style={{ fontSize: 15, padding: 10 }}>
                {cord.address}
                <br />
                {cord.city}
                <br />
                {cord.state}, {cord.zip}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button
                onClick={this.onReserve}
                style={this.state.isReserved ? { color: "#FFD1DC" } : null}
                style={{ paddingLeft: 80, paddingRight: 80 }}
              >
                Reserve
              </Button>
            </Card.Content>
          </Popup>
        </Marker>
      );
    });
  };

  render() {
    console.log(this.state.coords);
    const position = [this.state.location.lat, this.state.location.lng];

    return (
      <Fragment>
        <div
          className="box"
          style={{
            height: 700,
            width: 1200,
            backgroundColor: "white",
            opacity: 0.85,
            marginLeft: 350,
            marginTop: 150
          }}
        >
          <div
            className="map2"
            style={{
              zIndex: 99,
              opacity: 1,
              marginTop: 10,
              marginRight: 600
            }}
          >
            <Map className="map1" center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO</a>"
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
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
        </div>
      </Fragment>
    );
  }
}

export default CurrentLocation;
