import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bookings from "./Bookings";
import TimeShift from "./TimeShift";
import Profile from "./Profile";
import Notifications from "./Notifications";
import {
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
  Feather
} from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const HeaderRight = () =>{
    return(
        <View style={{flexDirection:'row', gap:12, paddingRight:10}}>
           <TouchableOpacity>
           <Feather name="search" size={24} color="white" />
           </TouchableOpacity>
           <TouchableOpacity>
           <Entypo name="dots-three-horizontal" size={24} color="white" />
           </TouchableOpacity>
        </View>
    )
}


const NotificationsHeaderRight = () =>{
    return(
        <View style={{flexDirection:'row', gap:12, paddingRight:10}}>
           <TouchableOpacity>
           <Feather name="search" size={24} color="white" />
           </TouchableOpacity>
        </View>
    )
}

function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "rgba(244, 235, 243, 1)",
        },
        tabBarActiveTintColor: "rgba(128, 29, 72, 1)",
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Time Shift":
              return (
                <Entypo
                  name="back-in-time"
                  size={24}
                  color={
                    focused ? "rgba(128, 29, 72, 1)" : "rgba(136, 136, 136, 1)"
                  }
                />
              );

            case "Bookings":
              return (
                <MaterialCommunityIcons
                  name="shield-cross-outline"
                  size={24}
                  color={
                    focused ? "rgba(128, 29, 72, 1)" : "rgba(136, 136, 136, 1)"
                  }
                />
              );

            case "Notifications":
              return (
                <Octicons
                  name="bell"
                  size={22}
                  color={
                    focused ? "rgba(128, 29, 72, 1)" : "rgba(136, 136, 136, 1)"
                  }
                />
              );

            case "Profile":
              return (
                <Ionicons
                  name="ios-person-circle-sharp"
                  size={29}
                  color={
                    focused ? "rgba(128, 29, 72, 1)" : "rgba(136, 136, 136, 1)"
                  }
                />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="Time Shift"
        component={TimeShift}
        options={{
          headerStyle: {
            backgroundColor: "rgba(128, 29, 72, 1)",
           
          },
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },
          title: "TimeSheet",
          headerRight: () => <HeaderRight/>
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          headerStyle: {
            backgroundColor: "rgba(128, 29, 72, 1)",
          },
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },
          headerRight: () => <HeaderRight/>
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerStyle: {
            backgroundColor: "rgba(128, 29, 72, 1)",
          },
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },
          headerRight: () => <NotificationsHeaderRight/>

         
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: "rgba(128, 29, 72, 1)",
          },
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },
          headerRight: () => <HeaderRight/>
         
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
