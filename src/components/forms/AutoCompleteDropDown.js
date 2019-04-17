import React, { useState } from "react";
import classnames from "classnames";

export default function AutoCompleteDropDown() {
  const [activeDropDown, setDropDown] = useState(false);
  const [country, setCountry] = useState("");

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
  return (
    <div
      className={classnames("autoCompleteDropDown", { opened: activeDropDown })}
    >
      <button onClick={handleDropDownClick} onBlur={handleDropDownClick}>
        Select your country <i className="fas fa-caret-down" />
      </button>
      <div className={classnames("dropDownContent")}>
        <input
          type="text"
          placeholder="Search country..."
          value={country}
          className="dropDownSearch"
          onChange={handleInputChange}
          autoFocus={true}
        />
        <span
          className={classnames("clearInput", { active: country !== "" })}
          onClick={handleClearClick}
        >
          <i className="fas fa-times" />
        </span>
        <div className="resultsList">this is list</div>
      </div>
    </div>
  );
}
