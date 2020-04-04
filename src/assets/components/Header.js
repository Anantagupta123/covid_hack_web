import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Icon name='location-pin' type='entypo' color='#6ad380' />
          </View>
          <View style={{ flex: 4 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "nunito-bold",
              }}
            >
              Location - Home
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Icon name='caretdown' type='antdesign' color='black' />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    padding: 10,
  },
});
