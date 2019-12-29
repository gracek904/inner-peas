import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Loading from "./src/components/auth/Loading";
import Login from "./src/components/auth/Login";
import Dashboard from "./src/components/auth/Dashboard";
import CreateUser from "./src/components/auth/CreateUser";

const AuthNavigator = createSwitchNavigator({
  Loading,
  CreateUser,
  Login,
  Dashboard
});

const root = createStackNavigator(
  {
    Auth: AuthNavigator,
    Map
  },
  {
    initialRouteName: "Auth"
  }
);

export default AppContainer = createAppContainer(root);
