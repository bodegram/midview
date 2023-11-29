import { View, Text, StatusBar, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import TimeSheetCard from '../../../components/TimeSheetCard'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingCard from '../../../components/BookingCard';

const Tab = createMaterialTopTabNavigator();

const Pending = () =>{
    return (
        <ScrollView>
        <BookingCard/>
        <BookingCard/>
        <BookingCard/>
        <BookingCard/>
        <BookingCard/>
        <BookingCard/>
      </ScrollView>
    )
}

const Done = () =>{
    return (
      <ScrollView>
        <BookingCard/>
      </ScrollView>
    )
}

function MyTabs() {
  return (
   <View style={{flex:1, height:380, marginTop:15}}>
     <Tab.Navigator  screenOptions={{
       tabBarIndicatorStyle:{
        backgroundColor:'rgba(128, 29, 72, 1)',
        height:50
       },
       tabBarInactiveTintColor: 'black',
       tabBarActiveTintColor: 'white'
      
     }}>
      <Tab.Screen name="Pending" component={Pending}  />
      <Tab.Screen name="Done" component={Done} />
    </Tab.Navigator>
   </View>
  );
}

export default function TimeShift() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='rgba(128, 29, 72, 1)'/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <TimeSheetCard/>
            <MyTabs/>
        </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:8,
       
    }
})