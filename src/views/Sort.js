import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CheckBox } from "react-native-elements";

export default function Sort({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ListLayout");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filter by:</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox />
        <Text style={styles.filterText}>Hospitals</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox />
        <Text style={styles.filterText}>Test Centers</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox />
        <Text style={styles.filterText}>Shelter Homes</Text>
      </View>
      <Text style={styles.heading}>Sort by:</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text style={styles.filterText}>Nearest</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text style={styles.filterText}>Next Available Slot</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text style={styles.filterText}>Farthest</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text style={styles.filterText}>Crowd</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 5,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingLeft: 30,
  },
  heading: {
    fontSize: 17,
    fontFamily: "nunito-bold",
  },
  filterText: {
    fontFamily: "nunito-regular",
  },
});
