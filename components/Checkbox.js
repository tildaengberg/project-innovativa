import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import { useState } from 'react'
import colors from '../config/colors'
import StyledText from '../config/StyledText'

var invert = false

const Checkbox = ({
  color = 'green',
  secondaryColor = 'white',
  children,
  disabled = false,
  source,
}) => {
  const [choosenColor, setColor] = useState(colors[secondaryColor].main)
  const [choosenBackgroundColor, setBackgroundColor] = useState(
    colors[secondaryColor].contrastColor
  )

  const onPress = () => {
    if (invert) {
      setColor(colors[secondaryColor].main)
      setBackgroundColor(colors[secondaryColor].contrastColor)
      invert = false
    } else {
      setColor(colors[color].main)
      setBackgroundColor(colors[color].contrastColor)
      invert = true
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: choosenColor }]}>
        <Image source={source} style={styles.image} />
        <StyledText textColor={choosenBackgroundColor} textStyle='button'>
          {children}
        </StyledText>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    width: '100%',
    maxHeight: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 100,
    marginRight: 25,
  },
})
