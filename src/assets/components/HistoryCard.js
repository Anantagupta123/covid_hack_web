import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function Card(props) {
  return (
    <View>
      <View style={styles.history}>
        <Text style={styles.headingText}>{props.name}</Text>
        <Text style={styles.address}>{props.address}</Text>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15 }}>
            <Text style={{ fontWeight: "bold" }}>Date: </Text>
            {props.date}
          </Text>
          <Text style={{ fontSize: 15 }}>
            <Text style={{ fontWeight: "bold" }}>Time: </Text>
            {props.time}
          </Text>
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <Icon name='edit' type='feather' color='#dcdcdc' size={20} />
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", paddingLeft: 10, paddingBottom: 10 }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", paddingTop: 5 }}>
            Status:{" "}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#6ad380",
              padding: 2,
              borderWidth: 1,
              borderColor: "#6ad380",
            }}
          >
            {props.bookingStatus}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    backgroundColor: "#fff",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 10,
    flex: 3,
  },
  address: {
    fontSize: 10,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  logo: {
    width: 70,
    height: 70,
  },
});
