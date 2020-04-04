import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

export default function StoreCard() {
  return (
    <View style={styles.body}>
      <View style={{ justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <View style={{ flex: 1.2 }}>
            <Image
              style={styles.logo}
              source={require("../images/icons/hospital.png")}
            />
          </View>
          <View style={{ flex: 4 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.storeName}>Hospital</Text>
              <Text
                style={{
                  flex: 0.5,
                  color: "#6ad380",
                  fontFamily: "nunito-regular",
                }}
              >
                0.3km
              </Text>
            </View>
            <Text style={{ fontSize: 10, fontFamily: "nunito-regular" }}>
              ABC, DEF Area
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 10, fontFamily: "nunito-bold" }}>
                    Serving Hours
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 10 }}>07:00AM - 09:00PM</Text>
                </View>
              </View>
              <View style={{ flex: 1.5 }}>
                <Text style={{ color: "#6ad380", fontFamily: "nunito-bold" }}>
                  Open Now
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingBottom: 10 }}>
                <Text style={styles.facilities}>Facilities</Text>
              </View>
            </View>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                borderBottomColor: "#dcdcdc",
                borderBottomWidth: 1,
              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3, paddingBottom: 20 }}>
                <Text style={styles.facilities}>Surgery</Text>
              </View>
              <TouchableOpacity style={{ flex: 1 }}>
                <Icon name='plus' type='antdesign' color='#6ad380' />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                borderBottomColor: "#dcdcdc",
                borderBottomWidth: 1,
              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3, paddingBottom: 20 }}>
                <Text style={styles.facilities}>X-Ray</Text>
              </View>
              <TouchableOpacity style={{ flex: 1 }}>
                <Icon name='plus' type='antdesign' color='#6ad380' />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                borderBottomColor: "#dcdcdc",
                borderBottomWidth: 1,
              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3, paddingBottom: 20 }}>
                <Text style={styles.facilities}>General Medicines</Text>
              </View>
              <TouchableOpacity style={{ flex: 1 }}>
                <Icon name='plus' type='antdesign' color='#6ad380' />
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                borderBottomColor: "#dcdcdc",
                borderBottomWidth: 1,
              }}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
  },
  logo: {
    width: 80,
    height: 80,
  },
  storeName: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    flex: 2,
  },
  facilities: {
    fontSize: 17,
    fontFamily: "nunito-regular",
  },
});
