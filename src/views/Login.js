import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function FirstScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("VerifyOtp");
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
        <Text style={styles.bodyHeading}>LOGIN</Text>
        <Text>Enter your 10 digit phone number.</Text>
        <View style={styles.input}>
          <Text style={styles.bodyText}>+91</Text>
          <TextInput
            placeholder='Enter Ph. Number'
            defaultValue={Text}
            keyboardType='number-pad'
            style={styles.textInput}
          />
        </View>
        <View style={{ paddingTop: 40 }}>
          <Button title='Proceed' color='#6ad380' onPress={pressHandler} />
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
    padding: 45,
  },
  bodyHeading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 40,
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bodyText: {
    padding: 20,
    fontSize: 20,
    flex: 1,
  },
  textInput: {
    flex: 6,
    borderBottomWidth: 1,
    borderColor: "grey",
    fontSize: 20,
  },
  footer: {
    flex: 0.5,
    flexDirection: "row",
    padding: 15,
  },
  footerText: {
    fontSize: 15,
  },
});
