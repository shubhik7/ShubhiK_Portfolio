import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
registerServiceWorker();
