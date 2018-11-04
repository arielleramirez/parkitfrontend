import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form
} from "semantic-ui-react";
import { NavLink } from "reactstrap";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Button onClick={this.show(true)}>SignUp</Button>

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
export default ModalLogin;
