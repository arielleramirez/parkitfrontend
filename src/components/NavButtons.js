import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { Button } from "semantic-ui-react";
import Profile from "./Profile";

class NavButtons extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Profile reservedRes={this.props.reservedRes} />

        <NavLink href="/profile" active>
          Profile
        </NavLink>
      </div>
    );
  }
}

export default NavButtons;
