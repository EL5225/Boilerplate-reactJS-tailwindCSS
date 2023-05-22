import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
