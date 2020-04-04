import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Card(prorps) {
  const status = () => {
    if (prorps.status === "Open") {
      return <Text style={{ color: "#6ad380" }}>{prorps.status}</Text>;
    } else {
      return <Text style={{ color: "red" }}>{prorps.status}</Text>;
    }
  };

  return (
    <TouchableOpacity style={{ paddingBottom: 5 }}>
      <View style={styles.card}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>{prorps.name}</Text>
          <Text style={styles.status}>{status()}</Text>
        </View>
        <Text style={styles.address}>{prorps.address}</Text>

        <View style={{ flexDirection: "row" }}>
          <View style={{ justifyContent: "space-between" }}>
            <Image
              style={styles.logo}
              source={require("../images/icons/hospital.png")}
            />
          </View>
          <View style={styles.details}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.serving}>Serving Hours:</Text>
              <Text style={styles.availableSlots}>Next Available Slots:</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 10, paddingLeft: 10 }}>
                {prorps.openingTime} - {prorps.closingTime}
              </Text>
              <Text style={{ fontSize: 10, paddingRight: 10 }}>
                {prorps.availableSlots}
              </Text>
            </View>
            <Text style={{ paddingLeft: 10, fontWeight: "bold", fontSize: 10 }}>
              Speciality
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  paddingLeft: 10,
                }}
              >
                {prorps.speciality}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  paddingRight: 10,
                }}
              >
                {prorps.distance}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },
  heading: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 5,
  },
  status: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    paddingRight: 25,
  },
  address: {
    fontSize: 10,
    paddingLeft: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  details: {
    flex: 6,
    paddingLeft: 10,
    paddingTop: 10,
  },
  serving: {
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 10,
  },
  availableSlots: {
    fontWeight: "bold",
    paddingRight: 10,
    fontSize: 10,
  },
});
