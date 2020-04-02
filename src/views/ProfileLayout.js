import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../assets/components/Header";
import FooterMenu from "../assets/components/FooterMenu";
// Components
import ProfileCard from "../assets/components/ProfileCard";

export default function Layout() {
  return (
    <View style={styles.conatiner}>
      {/* Header Component */}
      <Header />

      {/* Body Component */}
      <View style={styles.body}>
        {/* <UserProfile /> */}
        <View style={{ flex: 1 }}>
          <View style={styles.userProfile}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              User Profile
            </Text>
            <View style={{ flex: 1 }}>
              <ProfileCard />
            </View>
            <Button title='logout' color='#6ad380' />
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
