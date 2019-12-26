import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import firebase from "firebase";

class Loading extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          this.props.navigation.navigate("Dashboard");
        } else {
          this.props.navigation.navigate("Login");
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
