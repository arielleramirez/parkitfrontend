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
