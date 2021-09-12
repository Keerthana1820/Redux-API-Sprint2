import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./config/storeConfig";
import "./styles.css";
import { rootReducer } from "./redux/rootReducer";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore({ repository: {} }, rootReducer)}>
    <App />
  </Provider>,
  rootElement
);
