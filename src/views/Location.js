import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import FooterMenu from "../assets/components/FooterMenu";

export default class Location extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingBottom: 20 }}>
          <View style={styles.locationDetails}>
            <TouchableOpacity style={{ padding: 10 }}>
              <Icon name='arrowleft' type='antdesign' color='#dcdcdc' />
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
              <TextInput
                placeholder='Search for a locality, landmark'
                style={{ borderBottomWidth: 1 }}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.locationDetails}>
            <View style={{ padding: 10 }}>
              <Icon name='gps-fixed' type='MaterialIcons' color='#dcdcdc' />
            </View>
            <View style={{ padding: 10 }}>
              <Text>Use Current GPS Location</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationDetails}>
            <View style={{ padding: 10 }}>
              <Icon name='plus' type='entypo' color='#dcdcdc' />
            </View>
            <View style={{ padding: 10 }}>
              <Text>ADD NEW ADDRESS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationDetails}>
            <View style={{ padding: 10 }}>
              <Icon name='bookmark' type='FontAwesome' color='#dcdcdc' />
            </View>
            <View style={{ padding: 10 }}>
              <Text>SAVED ADDRESS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationDetails}>
            <View style={{ padding: 10 }}>
              <Icon name='location-on' type='MaterialIcons' color='#dcdcdc' />
            </View>
            <View style={{ padding: 10 }}>
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View>
          <FooterMenu />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationDetails: {
    padding: 10,
    flexDirection: "row",
  },
});
