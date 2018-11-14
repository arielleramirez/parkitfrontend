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
import Background from "../img/background.jpg";
import Markers from "./Markers";

const sectionStyle = {
  width: "100%",
  height: "100vh",
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
    newData: [],
    isReserved: false
  };

  componentDidMount() {
    fetch("http://localhost:3005/spots")
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

  onReserve = cord => {
    fetch(`http://localhost:3002/api/v1/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: 1, // return to once sign-on is finished up.
        parkingspace_id: cord.parkingspace_id,
        name: cord.location_name,
        street: cord.address,
        city: cord.city,
        state: cord.state,
        zip: cord.zip,
        lng: cord.lng,
        lat: cord.lat
      })
    })
      .then(response => response.json())
      .then(data => {
        debugger;
        this.setState({
          reserveSpot: data,
          isReserved: true
        });
      });
  };

  renderEachCoordinatePosition = stateObj => {
    return this.state.coords.map(cord => {
      var newPosition = [cord.lat, cord.lng];
      const { isReserved } = this.state;

      return (
        <Marker
          // onClick={() => this.onReserve(cord)}
          position={newPosition}
          icon={myIcon1}
        >
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
                onClick={() => this.onReserve(cord)}
                style={this.state.isReserved ? { color: "#FFD1DC" } : null}
                style={{
                  paddingLeft: 80,
                  paddingRight: 80,
                  backgroundColor: isReserved ? "#a5456a" : null,
                  color: isReserved ? "white" : null
                }}
              >
                {isReserved ? "Reserved" : "Reserve"}
              </Button>
            </Card.Content>
          </Popup>
        </Marker>
      );
    });
  };

  render() {
    console.log(this.state.coords);
    console.log(this.props);
    const position = [this.state.location.lat, this.state.location.lng];

    return (
      <Fragment>
        <div style={sectionStyle}>
          <div
            className="box"
            style={{
              height: "75%",
              width: "65%",
              backgroundColor: "white",
              opacity: 0.85,
              marginLeft: "17%",
              marginTop: "5%"
            }}
          >
            <div
              className="map2"
              style={{
                zIndex: 99,
                opacity: 1,
                marginTop: "5%",
                marginRight: "35%",
                marginLeft: "8%"
              }}
            >
              <Map className="map3" center={position} zoom={this.state.zoom}>
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
        </div>
      </Fragment>
    );
  }
}

export default CurrentLocation;
