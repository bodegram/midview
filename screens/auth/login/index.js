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
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const img = require("../../../assets/images/logo.png");
  const googleImg = require("../../../assets/images/google.png");
  const facebookImg = require("../../../assets/images/facebook.png");
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Image source={img} style={{ alignSelf: "center" }} />
          <Text
            style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
          >
            Sign In
          </Text>
          <Text style={{ textAlign: "center" }}>
            Sign In as an Healthcare Provider
          </Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Email Address" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 12 }}  onPress={()=>navigation.navigate('Reset Password')}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 12 }}>
                Don’t have an account?{" "}
                <Text style={{ color: "rgba(128, 29, 72, 1)" }} onPress={()=>navigation.navigate('Register')}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={{flexDirection:'row', marginBottom:20}}>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <Text style={{ textAlign: "center", width:50, marginTop:-10, fontWeight:'bold' }}>or</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </View>
          <View>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', gap:5, marginTop:10, marginBottom:10, borderWidth:1, borderColor:'grey', paddingVertical:15, borderRadius:5}}>
                <Image source={googleImg} style={{width:20,height:20}}/>
                <Text style={{fontWeight:'bold'}}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', gap:5, marginTop:10, marginBottom:10, borderWidth:1, borderColor:'grey', paddingVertical:15, borderRadius:5}}>
                <Image source={facebookImg} style={{width:20,height:20}}/>
                <Text style={{fontWeight:'bold'}}>Sign in with Facebook</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  top: {
    marginBottom: 20,
    marginTop:58
  },
  input: {
    backgroundColor: "rgba(255, 227, 242, 1)",
    padding: 10,
    color: "rgba(128, 29, 72, 1)",
    borderRadius: 5,
    marginBottom: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgba(128, 29, 72, 1)",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginTop:7
  },
});
