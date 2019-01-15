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

    fetch("http://localhost:3002/api/v1/users", {
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
      return <Redirect to="/profile" />;
    }

    return (
      <div>
        <Button
          inverted
          color="white"
          id="signUpButton"
          onClick={this.show(true)}
        >
          <h3>Sign up</h3>
        </Button>
        <Modal
          size="tiny"
          className="modal"
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          // onSubmit={this.handleSubmit}
        >
          <Image
            wrapped
            id="modalImage"
            size="medium"
            src={require("../img/signinMarker.png")}
          />
          <Modal.Header>
            <div className="modalTitle">SignUp.</div>
            <div className="modalBlurb">A new way to park</div>
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
                  id="submit"
                  name="submit"
                  active={active}
                  style={{
                    color: "white",
                    backgroundColor: active ? "#e55b00" : "#16203d"
                  }}
                >
                  Sign up
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
