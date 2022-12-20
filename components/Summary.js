import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import ProfilePic from './ProfilePic'
{/*<Summary profile={require("./assets/profile.png")} emoji='&#128546;' picture={require("./assets/favicon.png")} image_size={120} />*/}

const Summary = ({ onPress, disabled = false, profile, emoji, picture, image_size = 100, style }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.holder, style]}>
        <ProfilePic profile={profile} emoji={emoji} size={image_size} float='left' />
        <Image source={picture} style={[styles.image,{width:image_size, height:image_size, borderRadius: image_size}]} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Summary

const styles = StyleSheet.create({
  holder: {
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
    width: '100%',
    display: 'block',
  },
  image: {
    position: 'relative',
    float: 'right',
  }
})
