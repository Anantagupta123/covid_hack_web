import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default function Card(props) {
  return (
    <View>
      <View style={styles.profile}>
        <View style={styles.user}>
          <Text style={styles.userName}>{props.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.phone}>Mobile: </Text>
            <Text style={{ fontFamily: "nunito-regular" }}>
              +91 {props.mobile}
            </Text>
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
          <Text>{props.addressLine1}</Text>
          <Text>{props.addressLine2}</Text>
        </View>
      </View>

      <View style={{ padding: 2 }} />

      <View style={styles.profile}>
        <View style={styles.heading}>
          <Text style={styles.bodyText}>Send Feedback</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 10,
          }}
        >
          <View style={{ flex: 0.2 }}>
            <Icon name='mail' type='antdesign' color='#6ad380' />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ paddingBottom: 10, fontFamily: "nunito-regular" }}>
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
    fontFamily: "nunito-bold",
  },
  phone: {
    fontFamily: "nunito-bold",
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
    fontFamily: "nunito-bold",
    fontSize: 18,
    flex: 3,
  },
  address: {
    fontSize: 12,
    paddingLeft: 10,
    paddingBottom: 5,
    fontFamily: "nunito-bold",
  },
  logo: {
    width: 70,
    height: 70,
  },
});
