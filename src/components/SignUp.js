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

class ModalLogin extends Component {
  state = {
    open: false,
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

    fetch("http://localhost:3002/api/v1/users", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "content-type": "Application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(response => response.json())
      .then(newUser => this.props.createUser(newUser))
      .then(() => this.props.history.push("/mainpage"));
  };

  render() {
    const { open, dimmer } = this.state;
    const { classes } = this.props;
    const { active } = this.state;

    return (
      <div>
        <Button
          inverted
          color="white"
          className="logInButton"
          onClick={this.show(true)}
          style={{
            marginLeft: 75,
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
          onSubmit={this.handleSubmit}
        >
          <Image
            style={{ marginLeft: 120, marginTop: 20 }}
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
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
                  <input onChange={this.handleOnChange} placeholder="Name" />
                </Form.Field>
                <Form.Field>
                  <input
                    onChange={this.handleOnChange}
                    placeholder="Username"
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    onChange={this.handleOnChange}
                    placeholder="Password"
                  />
                </Form.Field>
                <Form.Field>
                  <input onChange={this.handleOnChange} placeholder="Email" />
                </Form.Field>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="submit"
                  active={active}
                  style={{
                    color: "white",
                    paddingLeft: 100,
                    paddingRight: 100,
                    backgroundColor: active ? "#e55b00" : "#16203d",
                    marginLeft: 130
                  }}
                >
                  Log In
                </Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default ModalLogin;
