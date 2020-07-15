import React from "react";
import 'tachyons';
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList";
import {friends} from './friends';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <CardList friends={friends}/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
