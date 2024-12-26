import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import HomeScreen from "../screens/ItemList";
import ItemDetails from "../screens/ItemDetails";
import NewItem from '../screens/NewItem';
import Profile from '../screens/Profile';
import HomeNavigation from './HomeNavigation';



const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Creat Item" component={NewItem} />
      <Tab.Screen name="Profile" component={Profile} />
       
    </Tab.Navigator>
  )
}

export default MainNavigation