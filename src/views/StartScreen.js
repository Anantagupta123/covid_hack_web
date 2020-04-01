import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";

export default function StartupScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Account");
  };

  return (
    <View style={styles.container}>
      <View
        style={{ flex: 10, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/logo/coroneed-logo.png")}
        />
        <Image
          style={styles.tagline}
          source={require("../assets/images/logo/tagline.png")}
        />
      </View>
      <View style={styles.button}>
        <Button title='Get Started' onPress={pressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6ad380",
  },
  logo: {
    width: 265.36,
    height: 43.19,
    marginBottom: 20,
  },
  tagline: {
    width: 210,
    height: 9,
  },
  button: {
    paddingBottom: 5,
    paddingLeft: 120,
    paddingRight: 120,
    flex: 1,
  },
});
