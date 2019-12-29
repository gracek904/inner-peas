import React, { Component, memo } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import get from "lodash/get";
import BackButton from "../components/BackButton";
import Background from "../components/Background";

const deltas = {
  latitudeDelta: 0.006866,
  longitudeDelta: 0.007866
};

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLocation: null,
      region: null,
      errorMessage: null
    };
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(
      Permissions.LOCATION
    ).catch(err => console.log(err));
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    let mylocation = await Location.getCurrentPositionAsync({});
    this.setState({ mylocation });
  };

  render() {
    const { mylocation } = this.state;
    let region = {
      latitude: get(mylocation, "coords.latitude"),
      longitude: get(mylocation, "coords.longitude"),
      ...deltas
    };
    return (
      <Background>
        <MapView
          style={styles.mapStyle}
          region={region.latitude && region}
          // showsUserLocation={true}
          zoomEnabled={true}
        ></MapView>
        <BackButton
          goBack={() => {
            this.props.navigation.navigate("Dashboard");
          }}
        />
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.9
  }
});

export default memo(MapScreen);
