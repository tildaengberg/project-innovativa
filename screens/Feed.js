import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import Input from '../components/Input'
import ProfilePic from '../components/ProfilePic'
import MoodPicker from '../components/MoodPicker'
import Button from '../components/Button'
import { useState } from 'react'
import FamilyImage from '../components/FamilyImage'


const Feed = () => {

  return (
    //<View style={MarginBox.container}>
      <View style={styles.fullHeight}>
      </View>
    //</View>
  )
}

export default Feed

const styles = StyleSheet.create({
  fullHeight: {
    height:'100%',
  }
})