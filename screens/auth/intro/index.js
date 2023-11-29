import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const img = require("../../../assets/images/logo.png");
  const cartoonImg = require("../../../assets/images/cartoon.png");
  const navigation = useNavigation();

 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <Image source={cartoonImg} style={{ alignSelf: "center", zIndex:999, width:300, height:250 }} />
        </View>
        <View style={styles.footer}>
          <View style={styles.top}>
            <Image source={img} style={{ alignSelf: "center" }} />
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Register')}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Register as an Healthcare Provider
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTwo}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Register as a Client
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection:'row',
    alignItems:'flex-end'
   
  },
  button: {
    backgroundColor: "rgba(129, 62, 133, 1)",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 2,
  },
  buttonTwo: {
    backgroundColor: "rgba(88, 102, 188, 1)",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 2,
  },
  footer:{
    backgroundColor:'rgba(255, 243, 250, 1)',
    bottom:1,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    marginTop:-70,
    paddingHorizontal:10,
    paddingBottom:100
  }
});
