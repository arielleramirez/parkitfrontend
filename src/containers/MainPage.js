import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { createUser } from "../actions/SignUp";
import Background from "../img/background.jpg";

const sectionStyle = {
  width: "100%",
  height: "150vh",
  position: "absolute",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};

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
        <div style={sectionStyle}>
          <NavBar
            handleLogOut={this.handleLogOut}
            handleProfile={this.handleProfile}
            handleMainPage={this.handleMainPage}
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

// <SearchBar
//   handleSubmit={this.handleSubmit}
//   handleChange={this.handleChange}
// />
