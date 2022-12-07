import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

const ProfilePic = ({ profile, emoji, onPress, disabled = false, size = 100 }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.holder, {width: size, height: size}]}>
        <Image source={profile} style={[styles.image, {borderRadius: size}]} /> 
        <Image source={emoji} style={[styles.emoji, {borderRadius: size}]} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProfilePic

const styles = StyleSheet.create({
  holder: {
    position: 'relative',
    marginBottom: 8,
    padding: 16,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  emoji: {
    top: '50%',
    left: '50%',
    height: '50%',
    width: '50%',
    position: 'absolute',
  }
})