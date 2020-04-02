import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default function FirstScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ListLayout");
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
        <View>
          <Text style={styles.bodyHeading}>VERIFY OTP</Text>
          <Text>Enter the OTP received on +91 xxxxx xxxxx</Text>
        </View>
        <View style={styles.input}>
          <TextInput placeholder='Enter Here' style={styles.textInput} />
          <Text style={{ paddingTop: 50 }}>
            Didn't received the OTP?
            <Text style={{ fontWeight: "bold" }}>Resend OTP</Text>
          </Text>
        </View>
        <Button title='Submit OTP' color='#6ad380' onPress={pressHandler} />
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
    paddingBottom: 10,
  },
  input: {
    paddingBottom: 10,
  },
  bodyText: {
    paddingTop: 20,
  },
  footer: {
    flex: 0.5,
    padding: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "black",
    fontSize: 15,
    paddingTop: 20,
  },
  footerText: {
    fontSize: 15,
  },
});
