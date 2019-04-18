import React from "react";
import spinner from "./../imgs/loadingSpinner.svg";

export default function LoadingSpinner() {
  return (
    <div className="loadingSpinner">
      <img title="Loading spinner" alt="Loading spinner" src={spinner} />
    </div>
  );
}
