import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

const ImageIcon = ({ editable = false }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={editable ? 'ios-pencil' : 'ios-add'}
        color={colors.green.contrastColor}
        size={20}
      />
    </View>
  )
}

export default ImageIcon

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green.main,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
})
