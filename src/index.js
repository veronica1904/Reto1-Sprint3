import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

import App from "./containers/App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// During an update, there is no need to pass the container again
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
