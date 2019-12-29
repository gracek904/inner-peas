import React, { Component } from "react";
import {
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
  Switch
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

export default class CreateUser extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    vegan: "",
    nut: "",
    errorMessage: null
  };

  toggleVegan = value => {
    this.setState({ vegan: value });
  };

  toggleNut = value => {
    this.setState({ nut: value });
  };

  handleSignUp = () => {
    const { email, password, name, vegan, nut } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(result) {
        // console.log(result);
        const uid = result.user.uid;
        db.collection("users")
          .doc(uid)
          .set({
            email: result.user.email,
            name: name,
            vegan: vegan,
            nut: nut
          })
          .then(console.log("success"))
          .catch(error => console.log(error));
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
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          // secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          placeholder="Name"
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
        <Button title="Submit" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
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
