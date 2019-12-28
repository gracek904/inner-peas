import React, { Component } from "react";

import * as firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from "./app/config";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
let db = firebase.firestore();

import AppContainer from "./route";
import Test from "./test";

export default class App extends Component {
  render() {
    return <Test />;
  }
}
