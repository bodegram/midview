import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import NotificationCard from "../../../components/NotificationCard";

export default function Notifications() {
  return (
    <>
      <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <TouchableOpacity>
            <Text
              style={{
                color: "rgba(25, 118, 210, 1)",
                textAlign: "center",
                marginBottom: 20,
                marginTop: 10,
                fontWeight: "bold",
              }}
            >
              Mark all as read
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "rgba(128, 29, 72, 1)",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Earlier
            </Text>
          </View>
        </View>
       
          <View style={styles.body}>
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
          </View>

      </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  top: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  body: {
    paddingVertical: 4,
  
  },
});
