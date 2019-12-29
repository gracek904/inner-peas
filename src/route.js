import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Loading from "./components/auth/Loading";
import Login from "./components/auth/Login";
import Dashboard from "./components/auth/Dashboard";
import CreateUser from "./components/auth/CreateUser";
import Map from "./components/screens/Map";
import Setting from "./components/screens/Setting";

const AuthNavigator = createSwitchNavigator({
  Loading,
  CreateUser,
  Login,
  Dashboard
});

const root = createStackNavigator(
  {
    Auth: AuthNavigator,
    Map,
    Setting
  },
  {
    initialRouteName: "Auth"
  }
);

export default AppContainer = createAppContainer(root);
