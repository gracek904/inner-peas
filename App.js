import React, { Component } from "react";

import * as firebase from "firebase";
import { firebaseConfig } from "./app/config";

firebase.initializeApp(firebaseConfig);

import AppContainer from "./route";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
