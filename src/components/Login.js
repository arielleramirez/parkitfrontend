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
import { Redirect } from "react-router";

class Login extends Component {
  state = { open: false, redirect: false, username: "", password: "" };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handleClick = () => this.setState({ active: !this.state.active });

  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:3002/api/v1/users")
      .then(response => response.json())
      .then(allUsers => {
        const user = allUsers.find(user => {
          return (
            user.username == this.state.username &&
            user.password == this.state.password
          );
        });
        if (user) {
          this.setState({ redirect: true });
        }
      });
  };

  render() {
    const { classes } = this.props;

    const { open, dimmer } = this.state;
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
            marginLeft: 5,
            textDecoration: "none",
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 15,
            paddingBottom: 15
          }}
        >
          Log in
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
            <div style={{ marginLeft: 210, marginTop: 20, fontSize: 35 }}>
              Log in
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
                    onChange={this.handleOnChange}
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    onChange={this.handleOnChange}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    type="password"
                  />
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
export default Login;
