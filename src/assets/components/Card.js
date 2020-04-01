import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Card() {
  return (
    <TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={styles.bodyText}>Hospital</Text>
          <Text style={styles.status}>Open Now </Text>
        </View>
        <Text style={styles.address}>ABC, DEF City</Text>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Image
              style={styles.logo}
              source={require("../images/icons/hospital.png")}
            />
          </View>
          <View style={{ flex: 6, paddingLeft: 10, paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.serving}>Serving Hours:</Text>
              <Text style={styles.availableSlots}>Next Available Slots:</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 4, fontSize: 10, paddingLeft: 10 }}>
                07:00AM - 09:00PM
              </Text>
              <Text style={{ flex: 2, fontSize: 10, paddingLeft: 10 }}>
                01:40PM, Today
              </Text>
            </View>
            <Text style={{ paddingLeft: 10, fontWeight: "bold", fontSize: 10 }}>
              Speciality
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  flex: 6,
                  fontSize: 10,
                  paddingLeft: 10,
                  paddingBottom: 5,
                }}
              >
                GENREAL SURGERY, CARDIOLOGY
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 10,
                  paddingLeft: 10,
                  paddingBottom: 5,
                }}
              >
                2.3KM
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  heading: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 2,
    marginTop: 2,
  },
  bodyText: {
    fontWeight: "bold",
    fontSize: 17,
    paddingTop: 5,
    paddingLeft: 10,
    flex: 3,
  },
  status: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 5,
    flex: 1,
    color: "#6ad380",
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
  serving: {
    fontWeight: "bold",
    flex: 4,
    paddingLeft: 10,
    fontSize: 10,
  },
  availableSlots: {
    fontWeight: "bold",
    flex: 3,
    paddingLeft: 10,
    fontSize: 10,
  },
});
