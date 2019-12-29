import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

export default class Dashboard extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate("Map")}
          >
            <Text style={styles.btnTxt}>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  userBtn: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "red"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginTop: 5
  }
});
