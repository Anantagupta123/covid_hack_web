import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Header from "../assets/components/Header";
import FooterMenu from "../assets/components/FooterMenu";

//Components
import Card from "../assets/components/Card";

export default function ListLayout() {
  return (
    <View style={styles.conatiner}>
      {/* Header Component */}
      <Header />

      {/* Body Component */}
      <View style={styles.lists}>
        {/* List of Hospital */}
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 5,
              }}
            >
              Nearby, Hospitals
            </Text>
            <Button title='Sort & Filter' color='#6ad380' />
          </View>
          <ScrollView style={{ paddingBottom: 20 }}>
            {/* Hospital Cards */}
            <View>
              <Card
                name='New Jersey Hospital'
                address='123, ABC Area '
                status='Open Now'
                availableSlots='01:40PM ,Today'
                distance='0.3 km'
              />
              <Card
                name='Boston Govt Hospital'
                address='456, DEF Area'
                status='Closed'
                availableSlots='8.00AM ,Tomorrow'
                distance='4.5 km'
              />
            </View>
          </ScrollView>
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
  lists: {
    flex: 1,
    padding: 7,
  },
});
