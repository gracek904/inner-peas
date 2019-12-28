import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Loading from "./app/components/auth/Loading";
import Login from "./app/components/auth/Login";
import Dashboard from "./app/components/auth/Dashboard";
import SignUp from "./app/components/auth/SignUp";
import First from "./app/components/auth/FirstTime";

const AuthNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard,
  SignUp: SignUp,
  First: First
});

const root = createStackNavigator(
  {
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Auth"
  }
);

export default AppContainer = createAppContainer(root);
