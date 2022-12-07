import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import StyledText from '../config/StyledText'
import colors from '../config/colors'

const Like = ({ color = 'black', children, onPress, disabled = false }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={[styles.holder, {width: 200, height: 20}]}>
            <StyledText textStyle='like' textColor={color}>
                <Image source={require('../assets/heart.png')} style={[styles.image, ]} /> 
                {children}
            </StyledText>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default Like

const styles = StyleSheet.create({
    holder: {
        marginBottom: 8,
        position: 'relative',
    },
    image: {
        width: 24, 
        height: 22, 
        marginRight: 5, 
        marginBottom: -5
    },
})