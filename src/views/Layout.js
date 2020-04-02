import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../assets/components/Header";
import FooterMenu from "../assets/components/FooterMenu";

// Components
import Card from "../assets/components/Card";
import ConfirmCard from "../assets/components/ConfirmCard";
import HistoryCard from "../assets/components/HistoryCard";

// Screens
import ListLayout from "../views/ListLayout";

export default function Layout() {
  return (
    <View style={styles.conatiner}>
      {/* Header Component */}
      <Header />

      {/* Body Component */}
      <View style={styles.body}>
        {/* List of Hospital */}
        <ListLayout />
        {/* <List /> */}

        {/* Appoinment Card */}
        {/* <ConfirmCard /> */}

        {/* History Card */}
        {/* <History /> */}

        {/* User Profile */}
        {/* <UserProfile /> */}

        {/* Sort & filter */}
        {/* <Sort /> */}
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
