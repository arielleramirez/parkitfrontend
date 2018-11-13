import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions/SignUp";
import MainPage from "../containers/MainPage";
import { Redirect } from "react-router";
import signMarker from "../img/signinMarker.png";

class SignUp extends Component {
  state = {
    open: false,
    redirect: false,
    name: "",
    username: "",
    password: "",
    email: ""
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handleClick = () => this.setState({ active: !this.state.active });

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(response => response.json())

      .then(data => {
        console.log(data);
        this.setState({ redirect: true });
      });
  };

  render() {
    const { open, dimmer } = this.state;
    const { classes } = this.props;
    const { active } = this.state;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/mainpage" />;
    }

    return (
      <div>
        <Button
          inverted
          color="white"
          className="logInButton"
          onClick={this.show(true)}
          style={{
            marginLeft: 210,
            textDecoration: "none",
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 15,
            paddingBottom: 15
          }}
        >
          SignUp
        </Button>
        <Modal
          size="tiny"
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          // onSubmit={this.handleSubmit}
        >
          <Image
            style={{ marginLeft: 225, marginTop: 20 }}
            wrapped
            size="medium"
            src={require("../img/signinMarker.png")}
          />
          <Modal.Header>
            <div style={{ marginLeft: 200, marginTop: 20, fontSize: 35 }}>
              SignUp.
            </div>
            <div style={{ marginLeft: 205, marginTop: 20, fontSize: 12 }}>
              A new way to park
            </div>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <input
                    value={this.state.username}
                    name="username"
                    onChange={this.handleOnChange}
                    placeholder="Username"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    value={this.state.email}
                    onChange={this.handleOnChange}
                    placeholder="Email"
                    name="email"
                  />
                </Form.Field>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="submit"
                  name="submit"
                  active={active}
                  style={{
                    color: "white",
                    paddingLeft: 100,
                    paddingRight: 100,
                    backgroundColor: active ? "#e55b00" : "#16203d",
                    marginLeft: 130
                  }}
                >
                  SignUp
                </Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default SignUp;
