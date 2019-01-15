import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import "../index.css";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import marker from "../img/marker3.png";
import search from "../img/search1.png";
import checkmark from "../img/checkmark.png";
import google from "../img/download.jpeg";
import apple from "../img/apple.0114092615334021508057.jpg";
import Carousel from "../components/Carousel";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          <div className="pageTop">
            <Login /> <SignUp />
            <h1 className="title">ParkIt.</h1>
          </div>
          <div>
            <hr />
            <h1 className="subtitle">{`It's Simple`} </h1>
            <Grid>
              <Grid.Column className="column1">
                <span>
                  <Image className="searchImage" src={search} />
                </span>
                <h2 className="searchTitle">Search</h2>
                <p className="searchParagraph">
                  Convienent search options right at your finger tips.
                </p>
              </Grid.Column>
              <Grid.Column className="column2">
                <Image className="markerImage" src={marker} />
                <h2 className="markerTitle">Locate</h2>
                <p className="markerParagraph">
                  Select the option that best suits you.
                </p>
              </Grid.Column>
              <Grid.Column className="column3">
                <Image className="checkmarkImage" src={checkmark} />

                <h2 className="checkmarkTitle">Reserve</h2>
                <p className="checkmarkParagraph">
                  With a click of a button, reserve your space now!
                </p>
              </Grid.Column>
            </Grid>
            <hr className="line" />
          </div>
          <div>
            <h1 className="subtitle2">Our Favorites </h1>
            <Carousel />
            <h1 className="subtitle3">Coming Soon </h1>
            <div className="footer">
              <Image className="googlebtn" src={google} />
              <Image className="applebtn" src={apple} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
