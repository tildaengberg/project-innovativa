import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors'
import StyledText from '../config/StyledText'

const ActionButton = ({ color, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Icon name='chevron-back' size={25} color={colors[color].main} />
      <StyledText textColor={color} textStyle='smallAction'>
        {text}
      </StyledText>
    </TouchableOpacity>
  )
}

export default ActionButton

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
