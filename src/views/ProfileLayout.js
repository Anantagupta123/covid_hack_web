import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../assets/components/Header";
import FooterMenu from "../assets/components/FooterMenu";
// Components
import ProfileCard from "../assets/components/ProfileCard";

export default function Layout() {
  const [personalInfo, setPersonalInfo] = useState([
    {
      id: 1,
      name: "John Smith",
      mobile: "73898 89383",
      addressLine1: "102, A Block, High View Residential",
      addressLine2: "Varsan Area, Old Town, K State",
    },
  ]);
  return (
    <View style={styles.conatiner}>
      {/* Header Component */}
      <Header />

      {/* Body Component */}
      <View style={styles.body}>
        {/* <UserProfile /> */}
        <View style={{ flex: 1 }}>
          <View style={styles.userProfile}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 5 }}
            >
              User Profile
            </Text>
            <View style={{ flex: 1 }}>
              {personalInfo.map(item => {
                return (
                  <ProfileCard
                    key={item.id}
                    name={item.name}
                    mobile={item.mobile}
                    addressLine1={item.addressLine1}
                    addressLine2={item.addressLine2}
                  />
                );
              })}
            </View>
            <Button title='Logout' color='#6ad380' />
          </View>
        </View>
      </View>

      {/* Footer Component */}
      <FooterMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#dcdcdc",
  },
  body: {
    flex: 1,
    padding: 5,
  },
  userProfile: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    padding: 5,
  },
});
