import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
const Cloud_Url = "https://api.cloudinary.com/v1_1/oliviatian/upload";
const Preset = "zuk87vgw";

class FormComponent extends Component {
  state = {
    name: "",
    image: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const file = this.state.image;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", Preset);
    fetch(Cloud_Url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data =>
        this.setState({ image: data.secure_url }, () =>
          this.props.handleFormSubmit(e, this.state)
        )
      );
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  render() {
    return (
      <div style={{ marginLeft: 600, marginTop: 350, width: 600 }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label style={{ color: "#863a58", fontSize: 14 }}>
              Edit Account
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="Name"
              placeholder="Name"
            />
          </Form.Field>

          <Form.Field>
            <input
              onChange={this.handleChange}
              type="text"
              name="Email"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <input
              onChange={this.handleChange}
              type="text"
              name="Password"
              placeholder="Password"
            />
          </Form.Field>
          <input
            type="file"
            onChange={this.handleImageChange}
            className="inputfile"
            id="embedpollfileinput"
          />
          <label for="embedpollfileinput" className="ui floated button">
            <i className="ui upload icon" />
            Upload image
          </label>

          <Button content="Submit" />
        </Form>
      </div>
    );
  }
}

export default FormComponent;
