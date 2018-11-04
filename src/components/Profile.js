import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { Button } from "semantic-ui-react";
import Result from "./Result";

const Profile = props => {
  console.log("profile props", props);
  console.log("props reserved", props.reservedRes);

  return (
    <div>
      {props.reservedRes.map(garage => {
        return <Result key={garage.id} address={garage.address} />;
      })}
    </div>
  );
};

export default Profile;
