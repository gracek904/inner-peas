import React, { Component } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions, Text } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import get from "lodash/get";

const deltas = {
  latitudeDelta: 100.6866,
  longitudeDelta: 100.7866
};

export default class Map extends Component {
  state = {
    myLocation: null,
    errorMessage: null,
    region: null
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION).then();
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    let mylocation = await Location.getCurrentPositionAsync({});
    this.setState({ mylocation });
    // const region = {
    //   latitude: get(mylocation, "coords.latitude"),
    //   longitude: get(mylocation, "coords.longitude"),
    //   ...deltas
    // };
    // this.setState({ region });
    console.log("inside");
    console.log(this.state);
  };

  getRegion = () => {
    const { mylocation } = this.state;
    if (mylocation) {
      const region = {
        latitude: get(mylocation, "coords.latitude"),
        longitude: get(mylocation, "coords.longitude"),
        ...deltas
      };
      this.setState({ region });
    }
  };

  render() {
    const { region } = this.state;
    console.log("this.state");
    console.log(this.state);
    console.log("region");
    console.log(region);
    console.log("this.state.region");
    console.log(this.state.region);
    return (
      <MapView
        style={styles.mapStyle}
        region={this.state.region}
        showsUserLocation={true}
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
