import React from "react";

export default function Loader({ message = "Loading..." }) {
  const spinnerStyle = {
    width: 36,
    height: 36,
    marginRight: 10,
    verticalAlign: "middle",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg
        style={spinnerStyle}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
        />
      </svg>
      <span>{message}</span>
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}