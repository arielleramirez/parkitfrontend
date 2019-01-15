import _ from "lodash";
import faker from "faker";
import React, { Component, Fragment } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import usermarker from "../img/u.png";
import parkingspacemarker from "../img/marker.png";
import Background from "../img/background.jpg";
import { Card, Button } from "semantic-ui-react";

import {
  LayersControl,
  BaseLayer,
  Map,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";

const sectionStyle = {
  width: "100%",
  height: "92vh",
  position: "absolute",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundColor: "white",
  backgroundImage: `url(${Background})`,
  zIndex: -9
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

const source = [
  {
    title: "777 Brockton Avenue, Abington MA 2351",
    lat: "42.096020",
    lng: "-70.967570"
  },
  {
    title: "30 Memorial Drive, Avon MA 2322",
    lat: "42.121185",
    lng: "-71.030151"
  },
  {
    title: "250 Hartford Avenue, Bellingham MA 2019",
    lat: "42.119200",
    lng: "-71.466270"
  },
  {
    title: "700 Oak Street, Brockton MA 2301",
    lat: "42.098140",
    lng: "-71.056490"
  },
  {
    title: "66-4 Parkhurst Rd, Chelmsford MA 1824",
    lat: "42.616550",
    lng: "-71.363340"
  },
  {
    title: "591 Memorial Dr, Chicopee MA 1020",
    lat: "42.172410",
    lng: "-72.573850"
  },
  {
    title: "55 Brooksby Village Way, Danvers MA 1923",
    lat: "42.554240",
    lng: "-70.968900"
  },
  {
    title: "137 Teaticket Hwy, East Falmouth MA 2536",
    lat: "41.571430",
    lng: "-70.587570"
  },
  {
    title: "Time Square, Manhattan, NY 10036",
    lat: "40.759770",
    lng: "-73.987970"
  },
  {
    title: "11 Broadway New York New York 10004",
    lat: "40.705368",
    lng: "-74.013850"
  },
  {
    title: "Central Park",
    lat: "40.782864",
    lng: "-73.965355"
  },
  {
    title: "Lincoln Center Plaza, New York, NY 10023",
    lat: "40.773540",
    lng: "-73.984436"
  },
  {
    title: "One World Trade Center, 285 Fulton St, New York, NY 10007",
    lat: "40.712993",
    lng: "-74.013224"
  },
  {
    title: "Pennsylvania Station, New York, NY 10119",
    lat: "40.750258",
    lng: "-73.992813"
  },
  {
    title: "Rockefeller Center, 45 Rockefeller Plaza, New York, NY 10111",
    lat: "40.758990",
    lng: "-73.979030"
  }
];

export default class MapComponent extends Component {
  state = {
    results: [],
    data: [],
    isLoaded: false,
    coords: [],
    isReserved: false
  };

  // handleChange = name => value => {
  //   fetch(
  //     "http://api.parkwhiz.com/parking/reservation/?key=0255bd8ed81adc912b5d2d720e8dd777e901d81d"
  //   )
  //     .then(response => response.json())
  //     .then(coords => {
  //       this.setState({
  //         coords: coords,
  //         isLoaded: true
  //       });
  //     });
  //
  //   this.setState({
  //     [name]: value,
  //     data: value
  //   });
  // };

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
        this.setState({
          reserveSpot: data,
          isReserved: true
        });
      });
  };
  renderEachCoordinatePosition = stateObj => {
    fetch("http://localhost:3005/spots")
      .then(response => response.json())
      .then(coords => {
        this.setState({
          coords: coords,
          isLoaded: true
        });
      });
    return this.state.coords.map(cord => {
      console.log(cord);
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

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "", position: "" });

  handleResultSelect = (e, { result }) => {
    console.log(e.target);
    this.setState({ position: [result.lat, result.lng], value: result.title });
  };

  handleSearchChange = (e, { value }) => {
    console.log(e.target.value);
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    console.log(this.state.coords);
    const { isLoading, value, results } = this.state;

    return (
      <Fragment>
        <Search
          style={{ marginLeft: "44%", zIndex: 99 }}
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          {...this.props}
        />

        <div
          className="box"
          style={{
            height: "50%",
            width: "65%",
            backgroundColor: "white",
            marginLeft: "17%",
            marginTop: "10%"
          }}
        >
          <div
            className="map2"
            style={{
              zIndex: 99,
              marginTop: "5%",
              marginRight: "35%",
              marginLeft: "8%"
            }}
          >
            <Map className="map1" center={this.state.position} zoom={16}>
              <TileLayer
                attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO</a>"
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <Marker position={this.state.position} icon={myIcon}>
                <Popup>Your current location</Popup>
              </Marker>
              {this.renderEachCoordinatePosition()}
            </Map>
          </div>
        </div>
      </Fragment>
    );
  }
}
