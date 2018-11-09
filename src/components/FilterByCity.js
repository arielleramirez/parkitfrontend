import React, { Component, Fragment } from "react";

const FilterByCity = props => {
  console.log(props);
  const handleChange = event => {
    props.handleCityChange(event.target.value);
  };

  return (
    <Fragment>
      <h1 className="banner">Parkit.</h1>
      <select onChange={handleChange}>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="LA">Louisiana</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MO">Missouri</option>
        <option value="NV">Nevada</option>
        <option value="NJ">New Jersey</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregan</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WI">Wisconsin</option>
      </select>
    </Fragment>
  );
};

export default FilterByCity;
