import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navigator from "./src/navigations/Navigation";
import StartScreen from "./src/views/StartScreen";
import Account from "./src/views/Account";
import Login from "./src/views/Login";
import Lists from "./src/views/Lists";
import Location from "./src/views/Location";
import Search from "./src/views/Search";
import SearchedResults from "./src/views/SearchedResults";
import FooterMenu from "./src/assets/components/FooterMenu";
import Card from "./src/assets/components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Its Working</Text> */}

      <Navigator />
      {/* <StartScreen /> */}
      {/* <Account /> */}
      {/* <Login /> */}
      {/* <FooterMenu /> */}
      {/* <Card /> */}
      {/* <Lists /> */}
      {/* <Location /> */}
      {/* <Search /> */}
      {/* <SearchedResults /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
