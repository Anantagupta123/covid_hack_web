import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import StartScreen from "../views/StartScreen";
import Account from "../views/Account";
import Login from "../views/Login";
import VerifyOtp from "../views/VerifyOtp";
import Layout from "../views/Layout";
import ListLayout from "../views/ListLayout";
import Sort from "../views/Sort";

const screens = {
  StartScreen: {
    screen: StartScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  VerifyOtp: {
    screen: VerifyOtp,
    navigationOptions: {
      headerShown: false,
    },
  },
  ListLayout: {
    screen: ListLayout,
    navigationOptions: {
      headerShown: false,
    },
  },
  Sort: {
    screen: Sort,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
