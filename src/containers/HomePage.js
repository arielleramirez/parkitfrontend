import React, { Component } from "react";
import Background from "../img/background1.jpg";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Button, Grid, Image, Icon } from "semantic-ui-react";
import "../index.css";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const sectionStyle = {
  width: "100%",
  height: "80vh",
  position: "absolute",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={sectionStyle}>
          <Login />
          <SignUp />
          <h1 className="title">ParkIt.</h1>
          <hr />

          <h1 className="subtitle">{`It's Simple`} </h1>
          <Grid className="grid">
            <Grid.Column style={{ marginLeft: 475, color: "#863a58" }}>
              <Icon.Group size="huge">
                <Icon size="big" name="circle outline" />
                <Icon className="searched" name="search" />
              </Icon.Group>
              <h2>Search</h2>
              <p style={{ width: 300 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt
                "
              </p>
            </Grid.Column>
            <Grid.Column style={{ marginLeft: 240, color: "#863a58" }}>
              <Icon.Group size="huge">
                <Icon size="big" name="circle outline" />
                <Icon className="searched" name="map marker alternate" />
              </Icon.Group>
              <h2>Locate</h2>
              <p style={{ width: 300 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt
                "
              </p>
            </Grid.Column>
            <Grid.Column style={{ marginLeft: 240, color: "#863a58" }}>
              <Icon.Group size="huge">
                <Icon size="big" name="circle outline" />
                <Icon className="searched" name="check" />
              </Icon.Group>
              <h2>Reserve</h2>
              <p style={{ width: 300 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt
                "
              </p>
            </Grid.Column>
          </Grid>

          <hr className="hr" />

          <h1 className="subtitle">Get The App </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
