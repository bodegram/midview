import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function BookingCard() {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.top}>
          <View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
                color: "rgba(128, 29, 72, 1)",
              }}
            >
              Healthcare Assistant
            </Text>
            <Text style={{ fontSize: 13 }}>Fountain Nursing Home</Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: "rgba(128, 29, 72, 1)",
                paddingVertical: 3,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
              >
                €274
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                backgroundColor: "rgba(255, 227, 242, 1)",
                borderRadius: 5,
                padding: 4,
                width: 160,
              }}
            >
              <Ionicons
                name="time-sharp"
                size={22}
                color="rgba(128, 29, 72, 1)"
              />
              <Text style={{ marginTop: 2, fontWeight: "bold" }}>
                07:59am - 10:00am
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 3 }}>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                Client Name:{" "}
              </Text>
              <Text style={{ fontSize: 11 }}>Fountain Nursing Home</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: "rgba(255, 61, 0, 0.19)",
                borderRadius: 20,
                padding: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "rgba(255, 61, 0, 1)",
                }}
              >
                Pending
              </Text>
            </View>
            {/*
             <View style={{backgroundColor:'rgba(40, 167, 69, 0.63)', borderRadius:20, padding:5}}>
               <Text style={{textAlign:'center', fontSize:12, color:'white'}}>Booked</Text>
            </View>
            */}
            <View>
              <Text style={{ fontSize: 11, color: "gray" }}>
                Posted 5 min ago
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop:10
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
