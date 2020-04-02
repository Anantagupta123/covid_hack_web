import React from "react";
import { View, TextInput, Button, ScrollView } from "react-native";
import FooterMenu from "../assets/components/FooterMenu";

export default function Search() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            padding: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, paddingRight: 10 }}>
            <TextInput
              placeholder='Search hospital, test centers, shleter homes'
              style={{ borderBottomWidth: 1 }}
            />
          </View>
          <Button title='Search' color='#6ad380' style={{ flex: 1 }} />
        </View>
      </ScrollView>
      <FooterMenu />
    </View>
  );
}
