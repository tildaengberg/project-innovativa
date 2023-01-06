import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import ProfilePic from './ProfilePic'

const Summary = ({
  onPress,
  disabled = false,
  profile,
  emoji,
  picture,
  image_size = 100,
  style,
}) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.holder, style]}>
        <ProfilePic
          profile={profile}
          emoji={emoji}
          size={image_size}
          float='left'
        />
        <Image
          source={picture}
          style={[
            { width: image_size, height: image_size, borderRadius: image_size },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Summary

const styles = StyleSheet.create({
  holder: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
})
