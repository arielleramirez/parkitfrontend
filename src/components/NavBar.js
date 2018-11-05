import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/SignUp";
import { Button } from "semantic-ui-react";
import faker from "faker";
import { Dropdown, Image } from "semantic-ui-react";

class NavBar extends Component {
  handleChange = e => {
    console.log(e.target);
    if (
      e.target.innerText == "Sign Out" ||
      e.target.className == "sign out icon"
    ) {
      this.props.handleLogOut();
    } else if (
      e.target.innerText == "Main Page" ||
      e.target.className == "home icon"
    ) {
      this.props.handleMainPage();
    } else {
      this.props.handleProfile();
    }
  };

  render() {
    console.log(this.props);
    const trigger = (
      <span>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        {this.props.currentUser.username}
      </span>
    );
    const options = [
      { key: "user", text: "Profile", icon: "user" },
      { key: "mainpage", text: "Main Page", icon: "home" },
      { key: "sign-out", text: "Sign Out", icon: "sign out" }
    ];

    return (
      <div
        style={{
          top: "20px",
          right: "100px",
          position: "absolute"
        }}
      >
        <Dropdown
          trigger={trigger}
          floating
          options={options}
          pointing="top left"
          icon={null}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(state => ({ currentUser: state.currentUser }))(NavBar);
