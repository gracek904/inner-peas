import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  MapScreen
} from "./screens";

const AuthNavigator = createSwitchNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoadingScreen"
  }
);

const Router = createStackNavigator(
  {
    Auth: AuthNavigator,
    MapScreen
  },
  {
    initialRouteName: "Auth",
    headerMode: "none"
  }
);

export default createAppContainer(Router);
