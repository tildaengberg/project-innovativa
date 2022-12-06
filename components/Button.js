import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Button = () => {
  return (
    <View style={button.container}>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Text>Test knapp</Text>
      </TouchableOpacity>
    </View>
  )
}

const button = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
