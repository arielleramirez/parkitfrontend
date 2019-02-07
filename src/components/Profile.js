import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { createUser } from "../actions/SignUp";
import FormComponent from "./FormComponent";
import ReservationsList from "./ReservationsList";

class Profile extends Component {
  state = {
    showDetail: false,
    targetReservation: {},
    searchBar: "",
    searchResult: [],
    userReservations: [],
    userHistory: [],
    showForm: true
  };

  handleReservation = event => {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(r => r.json())
      .then(resData => {
        this.setState({
          userReservations: resData
        });
      });
  };

  handleShowDetail = reservation => {
    this.setState({
      showDetail: true,
      targetReservation: reservation,
      showForm: false
    });
  };

  handleFavorite = reservation => {
    this.setState(prev => ({
      userHistory: [...prev.userHistory, reservation]
    }));
  };

  handleCancel = id => {
    let reservationsToKeep = this.state.userReservations.filter(reservation => {
      return reservation.id != id;
    });
    this.setState({
      userReservations: reservationsToKeep
    });
  };
  handleShowForm = event => {
    this.setState({
      showForm: true,
      showDetail: false
    });
  };

  handleMainPage = () => {
    this.props.history.push("/mainpage");
  };

  handleLogOut = event => {
    this.props.createUser(null);
    this.props.history.push("/");
    console.log(this.props.currentUserId);
  };

  handleProfile = () => {
    this.props.history.push("/profile");
  };

  render() {
    return (
      <div>
        <NavBar
          handleLogOut={this.handleLogOut}
          handleProfile={this.handleProfile}
          handleMainPage={this.handleMainPage}
        />
        <Button
          style={{
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 10,
            paddingBottom: 10,
            marginLeft: 300,
            marginTop: 20,
            marginBottom: 20
          }}
          onClick={this.handleReservation}
        >
          Your Reservations
        </Button>
        <ReservationsList
          userReservations={this.state.userReservations}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ currentUser: state.currentUser }),
  { createUser }
)(Profile);

// <Button onClick={this.handleAccountEdit}>Edit Account</Button>
