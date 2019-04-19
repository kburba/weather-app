import React from "react";

export default function List({ items, handleCityClick, handleRemoveLocation }) {
  return (
    <div className="list">
      {items.map((item, index) => {
        return (
          <div className="listItem" key={index + item}>
            <span onClick={() => handleCityClick(item)}>{item}</span>

            <div
              className="removeButton"
              onClick={() => handleRemoveLocation(item)}
            >
              <i className="fas fa-times" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
