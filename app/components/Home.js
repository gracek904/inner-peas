import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" />

        <Text style={{ color: "white" }}>Hello</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userBtn}>
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
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    width: "90%",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10
  },

  userBtn: {
    backgroundColor: "yellow",
    padding: 15,
    width: "45%"
  },

  btnTxt: {
    fontSize: 12,
    textAlign: "center"
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
  }
});
