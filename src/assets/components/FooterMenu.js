import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function FooterMenu() {
  return (
    <View style={styles.footer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <Icon name='compass' type='entypo' color='#6ad380' />
          <Text style={{ fontSize: 10, color: "#6ad380" }}>EXPLORE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <Icon name='search' type='evilicons' color='#dcdcdc' />
          <Text style={styles.footerText}>SEARCH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <Icon name='clock' type='feather' color='#dcdcdc' />
          <Text style={styles.footerText}>HISTORY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <Icon name='user' type='entypo' color='#dcdcdc' />
          <Text style={styles.footerText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    elevation: 5,
    backgroundColor: "#fff",
    padding: 15,
  },
  footerText: {
    fontSize: 10,
    color: "#dcdcdc",
  },
});
