import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
const Cloud_Url = "https://api.cloudinary.com/v1_1/oliviatian/upload";
const Preset = "zuk87vgw";

class FormComponent extends Component {
  state = {
    name: "",
    image: "",
    credit_card: "",
    cooking_time: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: ""
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
    return <div>Profile Page</div>;
  }
}

export default FormComponent;
