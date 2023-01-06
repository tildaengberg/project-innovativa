import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors'

const Profile = () => {
  return (
    <View style={MarginBox.container}>
        <Pressable onPress={() => {console.log("Back");}}>
            <Icon name='chevron-back' size={25} color={colors["black"].main} />
        </Pressable>
      <View style={[styles.centered, {marginTop:100}]}>
        <Text style={[styles.emoji, {fontSize: 100}]}>&#128546;</Text>
        <StyledText textStyle='h2'>
          Emma Svensson
        </StyledText>
        <View style={styles.descriptionText}>
            <StyledText textStyle='bodySmall'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </StyledText>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    centered: {
        alignItems:'center',
        justifyContent:'center',
        zIndex:1,
    },
    emoji: {
        padding: 16,
        marginBottom: 8,
    },
    descriptionText: {
        marginTop: 50,
        padding: 16
    }
})