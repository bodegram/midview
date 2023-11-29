import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NotificationCard() {
  return (
    <View style={styles.card}>
      <View
        style={{
          backgroundColor: "rgba(204, 204, 204, 0.93)",
          borderRadius: 30,
          padding: 20,
          height: 60,
          width: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          B
        </Text>
      </View>
      <View style={{flex:1}}>
        <Text style={{ fontWeight: "bold" }}>Bookings</Text>
        <Text>
          Your password for your [Account Name] account has been changed. Please
          review the details below and take action if necessary. If you did not
          make this change, please reset your password immediately.
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>25 Nov at 23:25 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 25,
    marginVertical: 10,
    paddingHorizontal: 2,
    flexWrap:'nowrap'
  },
});
