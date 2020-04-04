import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Navigator from "./src/navigations/Navigation";

//Screen Layouts
import ListLayout from "./src/views/ListLayout";
import HistoryLayout from "./src/views/HistoryLayout";
import ProfileLayout from "./src/views/ProfileLayout";
import StoreLayout from "./src/views/StoreLayout";
import ConfirmLayout from "./src/views/ConfirmLayout";

import Search from "./src/views/Search";
import SearchedResults from "./src/views/SearchedResults";
import Sort from "./src/views/Sort";
import Location from "./src/views/Location";
import Store from "./src/views/Store";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Its Working</Text> */}

      {/* <Navigator /> */}
      <ListLayout />
      {/* <HistoryLayout /> */}
      {/* <ProfileLayout /> */}
      {/* <Search /> */}
      {/* <SearchedResults /> */}
      {/* <Sort /> */}
      {/* <Location /> */}
      {/* <StoreLayout /> */}
      {/* <ConfirmLayout /> */}
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
