import React, { Component } from "react";

import * as firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from "src/config.js";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let db = firebase.firestore();
global.db = db;

import AppContainer from "src/route.js";
// import Test from "./test";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
