import {
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Entypo   } from "@expo/vector-icons";

export default function Profile() {
    const img = require('../../../assets/images/5.png')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="rgba(128, 29, 72, 1)" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:10, marginTop:34}}>
            <View style={styles.topcard}>
               <Image source={img} style={{position:'absolute', marginTop:-30, alignSelf:'center', width:133, height:133}}/>
               <Text style={{textAlign:'center', fontWeight:'bold', marginBottom:3, fontSize:20, color:'rgba(128, 29, 72, 1)'}}>John Doe</Text>
               <Text style={{textAlign:'center'}}>Support Worker</Text>
            </View>
        </View>
        <View>
          <TouchableOpacity style={styles.card}>
            <AntDesign
              name="exclamationcircle"
              size={20}
              color="rgba(128, 29, 72, 1)"
            />
            <Text style={{ fontWeight: "bold" }}>Basic Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
          <MaterialCommunityIcons name="star-cog" size={24} color="rgba(128, 29, 72, 1)"/>
            <Text style={{ fontWeight: "bold" }}>Skills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
          <FontAwesome5 name="user-graduate" size={24} color="rgba(128, 29, 72, 1)" />
            <Text style={{ fontWeight: "bold" }}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
          <FontAwesome name="briefcase" size={24}  color="rgba(128, 29, 72, 1)" />
            <Text style={{ fontWeight: "bold" }}>Work Experience</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
          <Entypo name="location-pin" size={25} color="rgba(128, 29, 72, 1)" />
            <Text style={{ fontWeight: "bold" }}>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
          <MaterialCommunityIcons name="account-details" size={27}  color="rgba(128, 29, 72, 1)" />
            <Text style={{ fontWeight: "bold" }}>Personal Detail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    gap: 14,
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginVertical: 7,
  },
  topcard: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingTop:100,
    paddingBottom:15,
    paddingHorizontal: 10,
    marginVertical: 7,
  },
});
