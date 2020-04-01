import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Card from "../assets/components/Card";
import FooterMenu from "../assets/components/FooterMenu";

export default function Lists() {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Icon name='location-pin' type='entypo' color='#6ad380' />
          </View>
          <View style={{ flex: 4 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}
            >
              Location - Home
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Icon name='caretdown' type='antdesign' color='black' />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.lists}>
        <View style={{ padding: 5, flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Nearby, Hospitals
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Button title='Sort & Filter' color='#6ad380' />
            </View>
          </View>
        </View>
        <ScrollView style={{ paddingBottom: 20 }}>
          <Card />
          <Card />
          <Card />
          <Card />
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
