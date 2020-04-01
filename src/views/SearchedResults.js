import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../assets/components/Card";
import FooterMenu from "../assets/components/FooterMenu";

export default function Lists() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, padding: 10 }}>
          <TextInput
            placeholder='Hospitals'
            style={{ fontSize: 15, borderBottomWidth: 1 }}
          />
        </View>
        <View>
          <Button title='Search' color='#6ad380' style={{ flex: 1 }} />
        </View>
      </View>

      <View style={styles.lists}>
        <View style={{ padding: 5, flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Searched Results
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ paddingBottom: 20 }}>
          <Card />
          <Card />
        </ScrollView>
      </View>
      <View>
        <FooterMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lists: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    padding: 5,
    justifyContent: "space-between",
  },
});
