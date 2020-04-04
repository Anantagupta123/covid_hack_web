import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../assets/components/Header";
import FooterMenu from "../assets/components/FooterMenu";

// Components
import StoreCard from "../assets/components/StoreCard";

export default function Layout() {
  return (
    <View style={styles.conatiner}>
      {/* Header Component */}
      <Header />

      {/* Body Component */}
      <View style={styles.body}>
        <ScrollView style={{ paddingBottom: 20 }}>
          <StoreCard />
          {/* <ConfirmCard /> */}
        </ScrollView>
        <View>
          <Button title='Book Appointmnet' color='#6ad380' />
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
});
