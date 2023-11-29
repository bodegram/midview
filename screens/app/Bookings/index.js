import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BookingCard from '../../../components/BookingCard'

export default function Bookings() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
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