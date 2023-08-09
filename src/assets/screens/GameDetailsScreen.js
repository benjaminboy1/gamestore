import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameDetailsScreen = ({navigation, route}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>GameDetailsScreen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default GameDetailsScreen

const styles = StyleSheet.create({})