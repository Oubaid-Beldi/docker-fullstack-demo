import React from "react";

export default function Loader({ message = "Loading..." }) {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <span>{message}</span>
    </div>
  );
}