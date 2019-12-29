import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

export default class Dashboard extends Component {
  state = {
    currentUser: null
  };

  // getName = async () => {
  //   const { currentUser } = firebase.auth();
  //   this.setState({ currentUser });
  //   const uid = currentUser.uid;
  //   let userName = null;
  //   await db.collection("users")
  //     .doc(uid)
  //     .get()
  //     .then(doc => {
  //       if (doc && doc.exists) {
  //         userName = doc.data().name;
  //         this.setState({ userName: doc.data().name });
  //       }
  //     });
  // };

  // componentWillMount() {
  //   this.getName();
  // }

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {this.state.currentUser && this.state.}!</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate("Map")}
            onPress={this.getName}
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
