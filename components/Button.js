import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'
import StyledText from '../config/StyledText'

const Button = ({ color = 'black', children, onPress, disabled = false }) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.button, { backgroundColor: colors[color].main }]}>
        <StyledText textStyle='button' textColor={colors[color].contrastColor}>
          {children}
        </StyledText>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
})
