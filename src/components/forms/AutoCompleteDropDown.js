import React, { useState } from "react";
import classnames from "classnames";

export default function AutoCompleteDropDown({ list, addLocation }) {
  const [activeDropDown, setDropDown] = useState(false);
  const [country, setCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleDropDownClick = () => {
    setDropDown(!activeDropDown);
  };

  const handleClearClick = () => {
    setCountry("");
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setCountry(value);
  };

  const handleAddClick = (city, country) => {
    if (city !== "") {
      // addLocation(city);
      setSelectedCountry(country);
    }
    setDropDown(false);
  };

  const filteredList = list.filter(item => {
    return item.name.toLowerCase().includes(country.toLowerCase());
  });

  const countryPlaceholder =
    selectedCountry !== "" ? selectedCountry : "Select country";

  return (
    <div
      className={classnames("autoCompleteDropDown", { opened: activeDropDown })}
    >
      <button onClick={handleDropDownClick} className="selectButton">
        {countryPlaceholder} <i className="fas fa-caret-down" />
      </button>
      <div className={classnames("dropDownContent")}>
        <input
          type="text"
          placeholder="Search country..."
          value={country}
          className="dropDownSearch"
          onChange={handleInputChange}
          autoFocus={true}
          onBlur={handleDropDownClick}
        />
        <span
          className={classnames("clearInput", { active: country !== "" })}
          onClick={handleClearClick}
        >
          <i className="fas fa-times" />
        </span>
        <div className="resultsList">
          {filteredList.map(item => {
            return (
              <div
                key={item.alpha3Code}
                value={item.capital}
                onClick={() => handleAddClick(item.capital, item.name)}
                className={classnames({
                  selected:
                    item.capital !== "" &&
                    typeof localStorage.locations !== "undefined" &&
                    localStorage.locations.indexOf(item.capital.toLowerCase()) >
                      -1
                })}
              >
                {item.name}
              </div>
            );
          })}
          {filteredList.length === 0 && (
            <div className="resultMessage">No results.</div>
          )}
        </div>
      </div>
    </div>
  );
}
