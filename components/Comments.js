import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import StyledText from '../config/StyledText'

const Comments = ({ color = 'black', children, onPress, disabled = false }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={[styles.holder, {width: 200, height: 20}]}>
            <StyledText textStyle='like' textColor={color}>
                <Image source={require('../assets/comment.png')} style={styles.image} /> 
                {children}
            </StyledText>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default Comments

const styles = StyleSheet.create({
    holder: {
        marginBottom: 8,
    },
    image: {
        width: 22, 
        height: 22, 
        marginRight: 5, 
        marginBottom: -5
    },
})