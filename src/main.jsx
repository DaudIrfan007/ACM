import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter here
import App from "./App"; // Import your App component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Wrap the App component in BrowserRouter */}
    </BrowserRouter>
  </React.StrictMode>
);
