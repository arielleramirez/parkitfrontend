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
  state = { open: false, email: "", password: "" };

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
    fetch("http://localhost:3002/api/v1/users")
      .then(response => response.json())
      .then(allUsers => {
        const user = allUsers.find(user => {
          return (
            user.email === this.state.email &&
            user.password === this.state.password
          );
        });
        this.props.createUser(user);
      })
      .then(() => this.props.history.push("/mainpage"));
  };

  render() {
    const { classes } = this.props;

    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show(true)}>Login</Button>
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          onSubmit={this.handleSubmit}
        >
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
          <Modal.Header>Parkit.</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
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

                <NavLink to="/mainpage" type="submit">
                  <Button> Submit </Button>
                </NavLink>
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
)(ModalLogin);
