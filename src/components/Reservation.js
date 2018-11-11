import React, { Component, Fragment } from "react";
import { Card, Button, Image } from "semantic-ui-react";
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

let myIcon = L.icon({
  iconUrl: usermarker,
  iconAnchor: [12.5, 41],
  popupAnchor: [7, -41]
});

const Reservations = props => {
  const onCancel = event => {
    console.log(event.target);
    fetch(`http://localhost:3001/api/v1/reservations/${props.id}`, {
      method: "DELETE"
    });
    props.handleCancel(props.id);
  };

  console.log(props);
  return (
    <Fragment>
      <Card style={{ width: 300, margin: 25 }}>
        <div className="map">
          <Map className="map" center={props.position} zoom={16}>
            <TileLayer
              attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO</a>"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={props.position} icon={myIcon}>
              <Popup>Your current location</Popup>
            </Marker>
          </Map>
        </div>
        <Card.Content style={{ paddingLeft: 50 }}>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>
            {props.street}
            <br />
            {props.city}
            <br />
            {props.state}, {props.zip}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            onClick={onCancel}
            id={props.id}
            style={{ paddingLeft: 80, paddingRight: 80, marginLeft: 35 }}
          >
            Cancel Reservation
          </Button>
        </Card.Content>
      </Card>
    </Fragment>
  );
};

export default Reservations;
