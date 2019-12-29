import React, { Component, Text } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import get from "lodash/get";

const Marker = MapView.Marker;

const deltas = {
  latitudeDelta: 0.006866,
  longitudeDelta: 0.007866
};

export default class Map extends Component {
  state = {
    myLocation: null,
    places: [],
    errorMessage: null
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let mylocation = await Location.getCurrentPositionAsync({});
    this.setState({ mylocation });
    // console.log(this.state.mylocation);
  };

  render() {
    const { mylocation } = this.state;
    const region = {
      latitude: get(mylocation, "coords.latitude"),
      longitude: get(mylocation, "coords.longitude"),
      ...deltas
    };

    return (
      <MapView
        style={styles.mapStyle}
        region={region}
        // showsUserLocation={true}
        zoomEnabled={true}
      ></MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
