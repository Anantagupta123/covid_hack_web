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
      >
        <View style={styles.button}>
          <Button title='Cancel' color='#6ad380' onPress={pressHandler} />
        </View>
        <View style={styles.button}>
          <Button title='Save' color='#6ad380' onPress={pressHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  heading: {
    fontSize: 17,
    fontFamily: "nunito-bold",
  },
  button: {
    padding: 5,
  },
  filterText: {
    fontFamily: "nunito-regular",
  },
});
