import { Text, View, StyleSheet } from "react-native";

import React, { Component } from "react";

import { firebaseConfig } from "./app/config";
import * as firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(DB_CONFIG);
}
let db = firebase.firestore();

export default class Test extends Component {
  render() {
    // db.collection("users")
    //   .add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   })
    //   .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function(error) {
    //     console.error("Error adding document: ", error);
    //   });
    db.collection("users")
      .doc("FOdwHYDrYveKlS2Ru1S1")
      .delete();
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
