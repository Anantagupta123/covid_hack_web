import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function Card() {
  return (
    <View>
      <View style={styles.profile}>
        <View style={styles.user}>
          <Text style={styles.userName}>Ryan Grey</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.phone}>Mobile: </Text>
            <Text>+91 80000 80000</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 2 }} />

      <View style={styles.profile}>
        <View style={styles.heading}>
          <Text style={styles.bodyText}>Saved Address</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: "space-between",
          }}
        >
          <Icon name='location-pin' type='entypo' color='#6ad380' />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>Home</Text>
          </View>
          <Icon name='edit' type='feather' color='#6ad380' />
        </View>
        <View style={{ paddingLeft: 35, paddingBottom: 5 }}>
          <Text>102, A Block, High View Residential</Text>
          <Text>Vasan Area, Old Town, States.</Text>
        </View>
      </View>

      <View style={{ padding: 2 }} />

      <View style={styles.profile}>
        <View style={styles.heading}>
          <Text style={styles.bodyText}>Send Feedback</Text>
        </View>

        <View style={{ flexDirection: "row", paddingLeft: 10 }}>
          <View style={{ flex: 0.2 }}>
            <Icon name='mail' type='antdesign' color='#6ad380' />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ paddingBottom: 10 }}>
              Email us at info@coroneed.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    padding: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  phone: {
    fontWeight: "bold",
  },
  profile: {
    backgroundColor: "#fff",
  },
  heading: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 2,
  },
  bodyText: {
    fontWeight: "bold",
    fontSize: 18,
    flex: 3,
  },
  address: {
    fontSize: 12,
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  logo: {
    width: 70,
    height: 70,
  },
});
