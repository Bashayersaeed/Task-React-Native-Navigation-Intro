import { Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/ItemList";
import ItemDetails from "../screens/ItemDetails";



const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ItemList" component={HomeScreen} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      
     
    </Stack.Navigator>
  );
};

export default HomeNavigation;

