import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  NavLink,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class ModalSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          SignUp
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <Form>
            <FormGroup>
              <Input
                type="name"
                name="name"
                id="exampleName"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
              />
            </FormGroup>
          </Form>
          <ModalFooter>
            <NavLink href="/mainpage" active>
              SignUp
            </NavLink>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalSignUp;
