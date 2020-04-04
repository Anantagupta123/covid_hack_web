import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default function StoreCard() {
  return (
    <View style={styles.confirmation}>
      <Icon name='checkcircle' type='antdesign' color='#6ad380' size={40} />
      <Text style={styles.text}>Appointment Request Sent</Text>
      <Text style={{ fontSize: 14, fontFamily: "nunito-regular" }}>to</Text>
      <Text style={styles.text}>Hospital</Text>
      <Text style={{ fontSize: 16, fontFamily: "nunito-regular" }}>
        02:10 PM, Today
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  confirmation: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
});
