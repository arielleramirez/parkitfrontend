import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
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

  // handleFormSubmit = (e, parkingInfo) => {
  //   console.log(e);
  //   console.log(parkingInfo);
  //   fetch("", {
  //     method: "POST",
  //     headers: {
  //       Accept: "Application/json",
  //       "Content-Type": "Application/json"
  //     },
  //     body: JSON.stringify({
  //       user_id: 2,
  //       name: parkingInfo.location_name,
  //       address: parkingInfo.address
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(reservation =>
  //       this.setState(prev => ({
  //         userReservations: [...prev.userReservations, reservation]
  //       }))
  //     )
  //     .then(console.log);
  // };

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

  // handleDelete = reservation => {
  //   console.log(reservation);
  //   let position;
  //   fetch("", {
  //     method: "DELETE",
  //     headers: {
  //       "Access-Control-Allow-Origin": "http://localhost:3002"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(console.log);
  //
  //   if (reservation.user_id === this.props.currentUser.id) {
  //     position = this.state.userReservations.indexOf(reservation);
  //     this.setState({
  //       userReservations: [
  //         ...this.state.userReservations.slice(0, position),
  //         ...this.state.userReservations.slice(position + 1)
  //       ]
  //     });
  //   } else {
  //     position = this.state.userHistory.indexOf(reservation);
  //     // debugger
  //     console.log([...this.state.userHistory.slice(position + 1)]);
  //     this.setState({
  //       userHistory: [
  //         ...this.state.userHistory.slice(0, position),
  //         ...this.state.userHistory.slice(position + 1)
  //       ]
  //     });
  //   }
  // .then(collections => collections.find(collection => collection))
  // console.log(reservation);
  // };
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
    console.log(this.props.currentUser);
    return (
      <div>
        <NavBar
          handleLogOut={this.handleLogOut}
          handleProfile={this.handleProfile}
          handleMainPage={this.handleMainPage}
        />
        <h1 className="banner">Parkit.</h1>
        <Button onClick={this.handleReservation}>Your Reservations</Button>
        <ReservationsList userReservations={this.state.userReservations} />
        <FormComponent />
      </div>
    );
  }
}

export default connect(
  state => ({ currentUser: state.currentUser }),
  { createUser }
)(Profile);
