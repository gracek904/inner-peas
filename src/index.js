import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
	HomeScreen,
	LoginScreen,
	RegisterScreen,
	ForgotPasswordScreen,
	AuthLoadingScreen,
	Dashboard,
	MapScreen,
} from "./screens";

import { MapDashboard } from "./components/Dashboard"

const AuthNavigator = createSwitchNavigator(
	{
		HomeScreen,
		LoginScreen,
		RegisterScreen,
		ForgotPasswordScreen,
		Dashboard,
		AuthLoadingScreen,
	},
	{
		initialRouteName: "AuthLoadingScreen",
	}
);

// Root
const Router = createStackNavigator(
	{
		Auth: AuthNavigator,
		MapScreen,
		MapDashboard
	},
	{
		initialRouteName: "Auth",
		headerMode: "none",
	}
);

export default createAppContainer(Router);
