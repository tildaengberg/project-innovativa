import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import colors from '../config/colors'
import StyledText from '../config/StyledText'

const ProfilePic = ({ color = 'black', source, onPress, disabled = false }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      {/* <View style={[styles.pic, { backgroundColor: colors[color].main }]}> */}
        <Image source={source} style={styles.image} />
      {/* </View> */}
    </TouchableWithoutFeedback>
  )
}

export default ProfilePic

const styles = StyleSheet.create({
  image: {
    marginBottom: 8,
    padding: 16,
    borderRadius: 100,
    height: 100,
    width: 100,
  },
})