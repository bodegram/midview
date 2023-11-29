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
  
  export default function ForgotPassword() {
    const img = require("../../../assets/images/logo.png");
    const googleImg = require("../../../assets/images/google.png");
    const facebookImg = require("../../../assets/images/facebook.png");
    const navigation = useNavigation()

    const [email, setEmail] = useState('')

    const onSubmit = () =>{
        if(email === ''){

        }

    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={styles.top}>
            <Image source={img} style={{ alignSelf: "center" }} />
            <Text
              style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
            >
              Forgot Password?
            </Text>
            <Text style={{ textAlign: "center" }}>
            Enter your email to get a new password
            </Text>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Email Address" />
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Send Reset Code
              </Text>
            </TouchableOpacity>
            <View
              style={{ justifyContent: "flex-end", flexDirection: "row" }}
            >
              <TouchableOpacity>
                <Text style={{ fontSize: 12 }}>
                  Remember Password?{" "}
                  <Text style={{ color: "rgba(128, 29, 72, 1)" }} onPress={()=>navigation.navigate('Login')}>Sign in</Text>
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
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    top: {
      marginBottom: 20,
      marginTop:100
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
      marginTop:2
    },
  });
  