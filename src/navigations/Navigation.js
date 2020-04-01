import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import StartScreen from "../views/StartScreen";
import Account from "../views/Account";
import Login from "../views/Login";
import VerifyOtp from "../views/VerifyOtp";
import Lists from "../views/Lists";

const screens = {
  StartScreen: {
    screen: StartScreen,
  },
  Account: {
    screen: Account,
  },
  Login: {
    screen: Login,
  },
  VerifyOtp: {
    screen: VerifyOtp,
  },
  Lists: {
    screen: Lists,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
