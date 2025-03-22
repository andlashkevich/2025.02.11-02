// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Blog } from "./blog.jsx";
import "./index.css";

// createRoot(document.getElementById('root')).render(
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Blog />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>,
);
