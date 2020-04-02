import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CheckBox } from "react-native-elements";

export default function Sort({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Lists");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>Filter by:</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox />
        <Text>Hospitals</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox />
        <Text>Test Centers</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox />
        <Text>Shelter Homes</Text>
      </View>
      <Text>Sort by:</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text>Nearest</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text>Next Available Slot</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text>Farthest</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox uncheckedIcon='circle-o' />
        <Text>Crowd</Text>
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
  button: {
    padding: 5,
  },
});
