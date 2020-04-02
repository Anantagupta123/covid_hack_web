import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../assets/components/Header";
import FooterMenu from "../assets/components/FooterMenu";

// Components
import HistoryCard from "../assets/components/HistoryCard";

export default function HistoryLayout() {
  return (
    <View style={styles.conatiner}>
      {/* Header Component */}
      <Header />

      {/* Body Component */}
      <View style={styles.history}>
        {/* <History /> */}

        <View style={{ paddingBottom: 5 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Booking History
            </Text>
          </View>
        </View>
        <ScrollView>
          <HistoryCard
            name='ABC Hospital'
            address='123, KLM Area'
            date='1-April-2020'
            time='2:00PM'
            bookingStatus='Request Pending'
          />
          <HistoryCard
            name='DEF Test Center'
            address='456, NOP Area'
            date='25-March-2020'
            time='11:00AM'
            bookingStatus='Cancelled'
          />
        </ScrollView>
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
  history: {
    flex: 1,
    padding: 7,
  },
});
