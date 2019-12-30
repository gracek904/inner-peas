import React, { Component } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import {
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
  Switch
} from "react-native";

export default class Personal extends Component {
  state = {
    name: "",
    vegan: false,
    nut: false,
    errorMessage: null
  };

  toggleVegan = value => {
    this.setState({ vegan: value });
  };

  toggleNut = value => {
    this.setState({ nut: value });
  };

  personalInfo = () => {
    const { name } = this.state;
    db.collection("users")
      .doc(uid)
      .set({
        name: name,
        vegan: vegan,
        nut: nut
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Text>Vegan</Text>
        <Switch
          style={styles.switchButton}
          onValueChange={this.toggleVegan}
          value={this.state.vegan}
        />
        <Text>Nut</Text>
        <Switch
          style={styles.switchButton}
          onValueChange={this.toggleNut}
          value={this.state.nut}
        />
        <Button title="Submit" onPress={this.personalInfo} />
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
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  },
  switchButton: {
    marginBottom: 10
  }
});
