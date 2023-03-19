import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Services from "./components/services/Services";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Services />
  </React.StrictMode>
);
