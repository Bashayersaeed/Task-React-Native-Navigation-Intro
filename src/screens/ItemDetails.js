import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


  const ItemDetails= ({ route}) => {
    const { name, price} = route.params
    console.log("route.params", route.params);
  return (
    <View>
      <Text>Item</Text>
      <Text>Name: {name}</Text>
      <text>price: {price}</text>
    </View>
  )
}


export default ItemDetails