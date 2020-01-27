import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  MapScreen
} from '../screens/Auth';

import Category from '../screens/Category/Category';
import CategoryMap from '../screens/CategoryMap/CategoryMap';
import DetailScreen from '../screens/DetailScreen/DetailScreen';

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
    initialRouteName: 'AuthLoadingScreen'
  }
);

// Root
const Router = createStackNavigator(
  {
    Auth: AuthNavigator,
    MapScreen,
    Category,
    CategoryMap,
    DetailScreen
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
);

export default createAppContainer(Router);
