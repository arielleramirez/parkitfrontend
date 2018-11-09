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
    searchBar: "",
    targetRecipe: {},
    searchResult: [],
    showForm: true
  };

  handleChange = input => {
    this.setState({
      searchBar: input
    });
  };
  //
  // componentDidMount() {
  //   fetch(`https://waze.com/ul?q=66%20Acacia%20Avenue`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // }

  handleShowDetail = obj => {
    this.setState({
      showDetail: true,
      targetRecipe: obj,
      showForm: false
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
    console.log(this.props);
    return (
      <React.Fragment>
        <NavBar
          handleLogOut={this.handleLogOut}
          handleProfile={this.handleProfile}
          handleMainPage={this.handleMainPage}
        />
        <div className="main-page-search" />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ currentUser: state.currentUser }),
  { createUser }
)(MainPage);

// <SearchBar
//   handleSubmit={this.handleSubmit}
//   handleChange={this.handleChange}
// />
