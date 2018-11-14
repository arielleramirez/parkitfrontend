import React, { Component } from "react";
import Background from "../img/background1.jpg";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Button, Grid, Image, Icon } from "semantic-ui-react";
import "../index.css";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import marker from "../img/marker3.png";
import search from "../img/search1.png";
import checkmark from "../img/checkmark.png";
import google from "../img/download.jpeg";
import apple from "../img/apple.0114092615334021508057.jpg";
import Carousel from "../components/Carousel";

const sectionStyle = {
  width: "100%",
  height: "100vh",
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
            <Grid.Column style={{ marginLeft: "21%", color: "#863a58" }}>
              <span className="dot">
                <Image style={{ marginLeft: 80 }} src={search} />
              </span>
              <h2 style={{ marginLeft: 75 }}>Search</h2>
              <p style={{ width: 265, fontSize: 18, marginLeft: "-3.5%" }}>
                Convienent search options right at your finger tips.
              </p>
            </Grid.Column>
            <Grid.Column style={{ marginLeft: "15.5%", color: "#863a58" }}>
              <Image style={{ marginLeft: 80 }} src={marker} />
              <h2 style={{ marginLeft: 80 }}>Locate</h2>
              <p style={{ width: 265, fontSize: 18, marginLeft: "-3.5%" }}>
                Select the option that best suits you.
              </p>
            </Grid.Column>
            <Grid.Column style={{ marginLeft: 225, color: "#863a58" }}>
              <Image style={{ marginLeft: 85 }} src={checkmark} />

              <h2 style={{ marginLeft: 80 }}>Reserve</h2>
              <p style={{ width: 265, fontSize: 18 }}>
                With a click of a button, reserve your space now!
              </p>
            </Grid.Column>
          </Grid>
          <hr className="hr" />
          <h1 className="subtitle">Our Favotires </h1>
          <Carousel />
          <h1 className="subtitle1">Coming Soon </h1>

          <Image
            style={{
              width: 250,
              float: "right",
              marginRight: "37%",
              paddingLeft: 10,
              marginTop: 20
            }}
            src={google}
          />
          <Image
            style={{
              width: 250,
              float: "right",
              marginTop: 20
            }}
            src={apple}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
