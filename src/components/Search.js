import React, { Component, Fragment } from "react";
import SearchBar from "./SearchBar";
import Background from "../img/background3.jpg";

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

class Search extends Component {
  render() {
    return (
      <Fragment>
        <SearchBar />
      </Fragment>
    );
  }
}

export default Search;
