import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { createUser } from "../actions/SignUp";
import { Container } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import MapComponent from "../components/MapComponent";
import Filter from "../components/Filter";

class MainPage extends Component {
  state = {
    showDetail: false,
    targetRecipe: {},
    searchBar: "",
    searchResult: [],
    userRecipes: [],
    userCollections: [],
    showForm: true
  };

  handleChange = input => {
    this.setState({
      searchBar: input
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `http://api.parkwhiz.com/parking/reservation/?key=0255bd8ed81adc912b5d2d720e8dd777e901d81d`
    )
      .then(response => response.json())
      .then(spaceData => {
        this.setState({
          searchResult: spaceData
        });
      });
  };

  handleLogOut = event => {
    this.props.createUser(null);
    this.props.history.push("/");
    console.log(this.props.currentUserId);
  };

  handleProfile = () => {
    this.props.history.push("/profile");
  };

  handleMainPage = () => {
    this.props.history.push("/mainpage");
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          handleLogOut={this.handleLogOut}
          handleProfile={this.handleProfile}
          handleMainPage={this.handleMainPage}
        />
        <div className="main-page-search">
          <Filter />
          <SearchBar
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <MapComponent searchResult={this.searchResult} />
          <SearchResults
            searchResult={this.state.searchResult}
            handleFavorite={this.handleFavorite}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ currentUser: state.currentUser }),
  { createUser }
)(MainPage);

// <Search
//   handleChange={this.handleChange}
//   handleSubmit={this.handleSubmit}
// />
