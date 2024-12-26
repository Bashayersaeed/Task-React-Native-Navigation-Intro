import { Button, Text, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'; 

const ItemList = () => {
  const data = [
    {
      id: 1,
      name: 'Stethescope',
      price: 20
    },
    {
      id: 2,
      name: 'Mug',
      price: 2
    },
    {
      id: 3,
      name: 'Reflex Hammer',
      price: 5
    }
   
  ]

  const navigation = useNavigation()

 const ItemDetailsViews = data.map (item => 
  <View key={item.id}>
    <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', item)}>
      <Text style={{ padding:10, backgroundColor: "pink", color: "white"}}>Press Me</Text>
      <Text>item:{item.name}</Text>
      <text>price: {item.price}</text>

    </TouchableOpacity>
  </View>)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// })

  return (
    <View>
      <Text>Details</Text>
      {ItemDetailsViews}
    </View>
  )
  };
  
export default ItemList;

// const style = StyleSheet.create({});