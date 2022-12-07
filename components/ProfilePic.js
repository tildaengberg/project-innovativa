import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

const ProfilePic = ({ source, onPress, disabled = false }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <Image source={source} style={styles.image} /> 
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