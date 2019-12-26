import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Loading from "./app/components/auth/Loading";
import Login from "./app/components/auth/Login";
import Dashboard from "./app/components/auth/Dashboard";

import Home from "./app/components/Home";

const AuthNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard
});

const root = createStackNavigator(
  {
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Loading",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white"
    }
  }
);

export default AppContainer = createAppContainer(root);
