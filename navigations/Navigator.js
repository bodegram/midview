import { View, Text } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from '@react-navigation/native';


export default function Navigator() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
        {!isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
