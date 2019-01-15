import React from "react";
import { Dropdown } from "semantic-ui-react";

const state = [
  { key: "IL", value: "IL", flag: "", text: "Illinois" },
  { key: "CA", value: "CA", flag: "", text: "California" },
  { key: "NY", value: "NY", flag: "", text: "New York" },
  { key: "NC", value: "NC", flag: "", text: "North Carolina" },
  { key: "OH", value: "OH", flag: "", text: "Ohio" },
  { key: "OK", value: "OK", flag: "", text: "Oklahoma" },
  { key: "OR", value: "OR", flag: "", text: "Oregan" },
  { key: "PA", value: "PA", flag: "", text: "Pennsylvania" },
  { key: "RI", value: "RI", flag: "", text: "Rhode Island" },
  { key: "SC", value: "SC", flag: "", text: "South Carolina" },
  { key: "TN", value: "TN", flag: "", text: "Tennessee" },
  { key: "TX", value: "TX", flag: "", text: "Texas" },
  { key: "VA", value: "VA", flag: "", text: "Virginia" },
  { key: "WA", value: "WA", flag: "", text: "Washington" },
  { key: "WI", value: "WI", flag: "", text: "Wisconsin" }
];

const FilterByCity = props => {
  const handleChange = (event, { value }) => {
    console.log(event.target.value);
    props.handleCityChange(value);
  };

  return (
    <div className="Dropdown">
      <Dropdown
        className="Dropdown"
        onChange={handleChange}
        placeholder="Select State"
        search
        fluid
        selection
        options={state}
      />
    </div>
  );
};
export default FilterByCity;

//
// { key: "AL", value: "AL", flag: "", text: "Alabama" },
// { key: "AK", value: "AK", flag: "", text: "Alaska" },
// { key: "AZ", value: "AZ", flag: "", text: "Arizona" },
// { key: "CA", value: "CA", flag: "", text: "California" },
// { key: "CO", value: "CO", flag: "", text: "Colorado" },
// { key: "CT", value: "CT", flag: "", text: "Connecticut" },
// { key: "FL", value: "FL", flag: "", text: "Florida" },
// { key: "GA", value: "GA", flag: "", text: "Georgia" },
// { key: "ID", value: "ID", flag: "", text: "Idaho" },
// { key: "IL", value: "IL", flag: "", text: "Illinois" },
// { key: "IN", value: "IN", flag: "", text: "Indiana" },
// { key: "IA", value: "IA", flag: "", text: "Iowa" },
// { key: "KS", value: "KS", flag: "", text: "Kansas" },
// { key: "LA", value: "LA", flag: "", text: "Louisiana" },
// { key: "MD", value: "MD", flag: "", text: "Maryland" },
// { key: "MA", value: "MA", flag: "", text: "Massachusetts" },
// { key: "MI", value: "MI", flag: "", text: "Michigan" },
// { key: "MN", value: "MN", flag: "", text: "Minnesota" },
// { key: "MO", value: "MO", flag: "", text: "Missouri" },
// { key: "NV", value: "NV", flag: "", text: "Nevada" },
// { key: "NJ", value: "NJ", flag: "", text: "New Jersey" }
