import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Modal } from "react-native";
import Header from "../assets/components/Header";
import FooterMenu from "../assets/components/FooterMenu";
//Components
import Card from "../assets/components/Card";
//Screen
import Sort from "../views/Sort";

export default function ListLayout({ naviagtion }) {
  const [hospital, setHospital] = useState([
    {
      id: 1,
      name: "New Jersey Hospital",
      address: "123, ABC Area",
      status: "Open",
      availableSlots: "01:40PM, Today",
      distance: "0.3 km",
      openingTime: "07:00AM",
      closingTime: "09:00PM",
      speciality: "GENREAL SURGERY, CARDIOLOGY",
    },
    {
      id: 2,
      name: "Boston Govt Hospital",
      address: "456, ICE Area",
      status: "Closed",
      availableSlots: "08:00AM, Tomorrow",
      distance: "2.3 km",
      openingTime: "08:00AM",
      closingTime: "11:00PM",
      speciality: "ORTHOPEDICS, GENERAL MEDICINE",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

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
                fontFamily: "nunito-bold",
              }}
            >
              Nearby, Hospitals
            </Text>
            <Button
              title='Sort & Filter'
              color='#6ad380'
              onPress={() => setModalOpen(true)}
            />
            <Modal visible={modalOpen} animationType='slide'>
              <Sort />
              <View
                style={{
                  padding: 60,
                  flexDirection: "row",
                }}
              >
                <View style={styles.buttons}>
                  <Button
                    title='Cancel'
                    color='#6ad380'
                    onPress={() => setModalOpen(false)}
                  />
                </View>
                <View style={styles.buttons}>
                  <Button
                    title='Save'
                    color='#6ad380'
                    onPress={() => setModalOpen(false)}
                  />
                </View>
              </View>
            </Modal>
          </View>

          {/* Hospital Card  */}
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={hospital}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                address={item.address}
                status={item.status}
                availableSlots={item.availableSlots}
                distance={item.distance}
                openingTime={item.openingTime}
                closingTime={item.closingTime}
                speciality={item.speciality}
              />
            )}
          />
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
  buttons: {
    width: "50%",
    paddingHorizontal: 10,
  },
  modalOpen: {
    flex: 1,
  },
});
