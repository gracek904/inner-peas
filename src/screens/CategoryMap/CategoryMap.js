import React, { Component } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View } from "react-native";
import { GOOGLE_API_KEY } from "react-native-dotenv";

//Components
import PlaceList from "../../components/Place/PlaceList";
//Styles
import styles from "./styles";
import BackButton from "../../components/old/BackButton";
import get from "lodash/get";

const deltas = {
	latitudeDelta: 0.006866,
	longitudeDelta: 0.007866,
};

class CategoryMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myLocation: null,
			region: null,
			errorMessage: null,
			lat: 0,
			long: 0,
			places: [],
			isLoading: false,
			placeType: "restaurant",
		};
		this.getLocationAsync();
	}

	getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION).catch(err => console.log(err));
		if (status !== "granted") {
			this.setState({
				errorMessage: "Permission to access location was denied",
			});
		}
		let mylocation = await Location.getCurrentPositionAsync({});
		this.setState({
			mylocation,
			lat: get(mylocation, "coords.latitude"),
			long: get(mylocation, "coords.longitude"),
		});
		console.log(this.state);
		this.getPlaces();
	};

	componentDidMount() {
		const { navigation } = this.props;
		const placeType = navigation.getParam("placeType");
		this.setState({ placeType: placeType });
	}

	/**
	 * Get the Place URL
	 */
	getPlacesUrl(lat, long, radius, type, apiKey) {
		const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
		const location = `location=${lat},${long}&radius=${radius}`;
		const typeData = `&types=${type}`;
		const api = `&key=${apiKey}`;
		return `${baseUrl}${location}${typeData}${api}`;
	}

	getPlaces() {
		const { lat, long, placeType } = this.state;
		const markers = [];
		const url = this.getPlacesUrl(lat, long, 1500, placeType, GOOGLE_API_KEY);
		fetch(url)
			.then(res => res.json())
			.then(res => {
				res.results.map((element, index) => {
					const marketObj = {};
					marketObj.id = element.id;
					marketObj.name = element.name;
					marketObj.photos = element.photos;
					marketObj.rating = element.rating;
					marketObj.vicinity = element.vicinity;
					marketObj.marker = {
						latitude: element.geometry.location.lat,
						longitude: element.geometry.location.lng,
					};

					markers.push(marketObj);
				});
				//update our places array
				this.setState({ places: markers });
				console.log(this.state.places);
			});
	}

	render() {
		const { lat, long, places } = this.state;
		let region = {
			latitude: lat,
			longitude: long,
			...deltas,
		};
		return (
			<View style={styles.container}>
				<View style={styles.mapView}>
					<MapView
						style={{
							flex: 1,
						}}
						provider={PROVIDER_GOOGLE}
						region={region}
						showsUserLocation={true}
						zoomEnabled={true}
					>
						{places.map((marker, i) => (
							<MapView.Marker
								key={i}
								coordinate={{
									latitude: marker.marker.latitude,
									longitude: marker.marker.longitude,
								}}
								title={marker.name}
							/>
						))}
						<BackButton
							goBack={() => {
								this.props.navigation.navigate("Dashboard");
							}}
						/>
					</MapView>
				</View>
				<View style={styles.placeList}>
					<PlaceList places={places} />
				</View>
			</View>
		);
	}
}

export default CategoryMap;
