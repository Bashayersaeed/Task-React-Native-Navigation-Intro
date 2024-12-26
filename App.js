import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './src/navigations/HomeNavigation'; 

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation />
  
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


