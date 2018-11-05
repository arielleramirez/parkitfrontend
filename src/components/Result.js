import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Card, Image, Button } from "semantic-ui-react";

class Result extends Component {
  state = {
    isReserved: false
  };

  onReserve = event => {
    console.log(this.props.recipe);
    const ingredients = this.props.recipe.ingredients.map(
      ingredient => ingredient.text
    );
    fetch(`http://localhost:3001/users/1/recipes`, {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        user_id: 1, //fix user id to 1,recipes from api
        name: this.props.recipe.location_name
      })
    })
      .then(res => res.json())
      .then(newRecipe => {
        fetch(
          `http://localhost:3001/users/${
            this.props.currentUser.id
          }/collections`,
          {
            method: "POST",
            headers: {
              Accept: "Application/json",
              "Content-Type": "Application/json"
            },
            body: JSON.stringify({
              collector_id: this.props.currentUser.id,
              recipe_id: newRecipe.id
            })
          }
        )
          .then(response => response.json())
          .then(console.log);
        this.setState({
          isReserved: true
        });
      });
  };
  render() {
    console.log(this.props);
    console.log(this.props.currentUser);

    const { classes } = this.props;
    return (
      <Card style={{ width: 300, margin: 25 }}>
        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
        <Card.Content style={{ paddingLeft: 50 }}>
          <Card.Header>{this.props.location_name}</Card.Header>
          <Card.Meta>
            <span className="date">Vacant</span>
          </Card.Meta>
          <Card.Description>
            {this.props.address}
            <br />
            {this.props.state}, {this.props.zip}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            onClick={this.onReserve}
            style={this.state.isReserved ? { color: "#FFD1DC" } : null}
            style={{ paddingLeft: 80, paddingRight: 80, marginLeft: 35 }}
          >
            Reserve
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(state => ({ currentUser: state.currentUser }))(Result);
