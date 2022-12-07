import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

const ProfilePic = ({ profile, emoji, onPress, disabled = false, width = 100, height = 100 }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.holder, {width: width, height: height}]}>
        <Image source={profile} style={styles.image} /> 
        <Image source={emoji} style={styles.emoji} />
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
    borderRadius: 100,
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  emoji: {
    borderRadius: 100,
    top: '50%',
    left: '50%',
    height: '50%',
    width: '50%',
    position: 'absolute',
  }
})