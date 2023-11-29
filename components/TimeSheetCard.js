import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TimeSheetCard() {
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
              John Doe
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 7,
                backgroundColor: "rgba(255, 227, 242, 1)",
                borderRadius: 5,
                padding: 4,
                width: 120,
                marginTop: 8,
              }}
            >
              <Ionicons
                name="time-sharp"
                size={22}
                color="rgba(128, 29, 72, 1)"
              />
              <Text style={{ marginTop: 2, fontWeight: "bold" }}>
                2,305 Hours
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                Job Type{" "}
              </Text>
              <Text style={{ fontSize: 11 }}>: Health Care Assistance</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                backgroundColor: "rgba(255, 227, 242, 1)",
                borderRadius: 5,
                padding: 4,
                width: 90,
                justifyContent: "flex-start",
                marginTop: 8,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Code:</Text>
              <Text>435</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={{ fontWeight: "bold" }}>Mid-View Healthcare</Text>
              <Text style={{ width: 130, textAlign: "right", fontSize: 12 }}>
                83-85, Leeds Road, Liverpool,England, United Kingdom. 555 8GK
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomCard}>
            <View
              style={{
                borderRightWidth: 1,
                borderColor: "white",
                paddingRight: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 27,
                  textAlign: "center",
                }}
              >
                6
              </Text>
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 14 }}
              >
                Time Shift
              </Text>
            </View>
            <View
              style={{
                borderRightWidth: 1,
                borderColor: "white",
                paddingRight: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 27,
                  textAlign: "center",
                }}
              >
                2
              </Text>
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 14 }}
              >
                Done
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 27,
                  textAlign: "center",
                }}
              >
                4
              </Text>
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 14 }}
              >
                Pending
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
    marginBottom: 25,
  },
  card: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginTop:10
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomCard: {
    backgroundColor: "rgba(255, 109, 177, 1)",
    flexDirection: "row",
    gap: 35,
    padding: 15,
    borderRadius: 5,
  },
});
