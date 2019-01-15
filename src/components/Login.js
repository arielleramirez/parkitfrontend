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
      return <Redirect to="/profile" />;
    }

    return (
      <div>
        <Button
          inverted
          color="white"
          id="logInButton"
          onClick={this.show(true)}
        >
          <h3>Log in</h3>
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
            id="modalImage"
            wrapped
            size="medium"
            src={require("../img/signinMarker.png")}
          />
          <Modal.Header>
            <div className="modalTitle">Log in</div>
            <div className="modalBlurb">A new way to park</div>
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
                  id="submit"
                  active={active}
                  style={{
                    color: "white",
                    backgroundColor: active ? "#e55b00" : "#16203d"
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
