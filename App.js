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
}
let db = firebase.firestore();
global.db = db;

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;
