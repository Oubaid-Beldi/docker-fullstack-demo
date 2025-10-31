import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Added: global styles
import "./index.css";

// Render the React application into #root in public/index.html
const container = document.getElementById("root");
if (!container) {
    throw new Error("Root container not found. Make sure public/index.html has a div with id=\"root\"");
}
createRoot(container).render(<App />);
