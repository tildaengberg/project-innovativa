import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from 'react-native'
{/*<ProfilePic profile={require("./assets/profile.png")} emoji='&#128546;' />*/}

const ProfilePic = ({ profile, emoji, onPress, disabled = false, size = 100, float }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress} >
      <View style={[styles.holder, {width: size, height: size}]}>
        <Image source={profile} style={[styles.image, {borderRadius: size}]} /> 
        <Text style={[styles.emoji, {fontSize: size/2.5}]}>{emoji}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProfilePic

const styles = StyleSheet.create({
  holder: {
    position: 'relative',
    marginBottom: 8,
    float: 'left',
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  emoji: {
    top: '55%',
    left: '55%',
    position: 'absolute',
  }
})