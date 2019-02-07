import React, { Component } from "react";
import { Button, Image, Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { createUser } from "../actions/SignUp";

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

    fetch("http://localhost:3001/api/v1/users")
      .then(response => response.json())
      .then(allUsers => {
        const isUser = allUsers.find(user => {
          return (
            user.username === this.state.username &&
            user.password === this.state.password
          );
        });
        console.log(isUser);
        if (isUser) {
          this.setState({ redirect: true });
        }
      });
  };

  render() {
    console.log(this.state.redirect);
    console.log(this.state.username);

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
          centered={false}
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
                    value={this.state.password}
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                </Form.Field>

                <Button
                  onClick={this.handleSubmit}
                  type="submit"
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
export default connect(
  null,
  { createUser }
)(Login);
