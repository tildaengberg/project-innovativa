import React from 'react'
import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import ProfilePic from '../components/ProfilePic'
import Button from '../components/Button'
import ActionButton from '../components/ActionButton'

const Profile = () => {
  return (
    <View style={MarginBox.container}>
      <View style={[styles.centered, { marginTop: 50 }]}>
        <ProfilePic
          profile={require('../assets/profile.png')}
          size={200}
        ></ProfilePic>
        <StyledText textStyle='h3'>Emma Svensson</StyledText>
        <View style={[{ marginTop: 75, width: '100%' }]}>
          <Button color='yellow'>Mina uppdateringar</Button>
          <Button color='yellow'>Hantera familj</Button>
          <View style={[styles.centered, { marginTop: 10 }]}>
            <ActionButton text='Logga ut' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
})
