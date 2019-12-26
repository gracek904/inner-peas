import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";

class Login extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    console.log("Google Auth Response", googleUser);
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();

        if (!this.isUserEqual(googleUser, firebaseUser)) {
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );

          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function(result) {
              console.log("user signed in");
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name
                });
            })
            .catch(function(error) {
              console.log(error);
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        iosClientId:
          "365281785192-s1go52bh4q9ngd7gvu8tjjrjnm7br6kd.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
      if (result.type === "success") {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={() => this.signInWithGoogleAsync()} />
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
