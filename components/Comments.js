import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import StyledText from '../config/StyledText'

const Comments = ({ color = 'black', children, onPress, disabled = false }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.holder]}>
        <Ionicons name='ios-chatbubble-outline' size={25} />
        <StyledText textStyle='like' textColor={color}>
          {children}
        </StyledText>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Comments

const styles = StyleSheet.create({
  holder: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
