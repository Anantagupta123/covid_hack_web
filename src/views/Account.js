import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function FirstScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo/coroneed-logo.png")}
        />
        <Image
          style={styles.tagline}
          source={require("../assets/images/logo/tagline.png")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyHeading}>ACCOUNT</Text>
        <Text style={{ paddingBottom: 30, fontFamily: "nunito-regular" }}>
          Login/Create an account to know about grocery, medical, milk, meat
          shops around you. {"\n"}Know about nearby COVID-19 testing centers,
          hospitals and Govt. shelters
        </Text>
        <View style={styles.button}>
          <Button title='Login' color='#6ad380' onPress={pressHandler} />
        </View>
        <View style={styles.button}>
          <Button
            title='Create Account'
            color='#6ad380'
            onPress={pressHandler}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Learn more about COVID-19 and its prevention tips. Here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flex: 3,
    backgroundColor: "#6ad380",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 40,
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
  body: {
    flex: 4,
    padding: 40,
  },
  bodyHeading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 40,
    fontFamily: "nunito-bold",
  },
  button: {
    padding: 5,
  },
  footer: {
    flex: 0.5,
    flexDirection: "row",
    padding: 15,
  },
  footerText: {
    fontSize: 15,
    fontFamily: "nunito-regular",
  },
});
