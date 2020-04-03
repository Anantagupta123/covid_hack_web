import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import StartScreen from "../views/StartScreen";
import Account from "../views/Account";
import Login from "../views/Login";
import VerifyOtp from "../views/VerifyOtp";
import ListLayout from "../views/ListLayout";
import Sort from "../views/Sort";
import Search from "../views/Search";
import Location from "../views/Location";

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
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
    },
  },
  Location: {
    screen: Location,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
