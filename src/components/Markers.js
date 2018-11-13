import React, { Component, Fragment } from "react";
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
import usermarker from "../img/u.png";
import parkingspacemarker from "../img/marker.png";

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

class Markers extends Component {
  state = {
    reserveSpot: [],
    isReserved: false
  };

  render() {
    console.log(this.props);
    // console.log(this.props.coords);
    return <div />;
  }
}

export default Markers;
