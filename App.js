<<<<<<< HEAD
import React from "react";
import { Provider } from "react-native-paper";
import App from "./src";
import { theme } from "./src/core/theme";

import * as firebase from "firebase";
import "firebase/firestore";
import { FIREBASE_CONFIG } from "./src/core/config";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
=======
import React, { Component } from "react";

import * as firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from "./src/config.js";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
>>>>>>> 799f4610f454430615d8866b3c5ed1e21125d567
}
let db = firebase.firestore();
global.db = db;

<<<<<<< HEAD
const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;
=======
import AppContainer from "./src/route.js";
// import Test from "./test";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
>>>>>>> 799f4610f454430615d8866b3c5ed1e21125d567
