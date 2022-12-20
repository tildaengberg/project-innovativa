import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from 'react-native'
import { useState } from 'react'
import colors from '../config/colors'

var invert = false;



const Checkbox = ({ color='green', secondaryColor='white', children, disabled = false, source }) => {

  const [choosenColor, setColor] = useState(colors[color].main);
  const [choosenBackgroundColor, setBackgroundColor] = useState(colors[color].contrastColor);
  
  const onPress = () => {
    if (invert) {
      setColor(colors[color].main);
      setBackgroundColor(colors[color].contrastColor);
      invert = false;
    } else {
      setColor(colors[secondaryColor].main);
      setBackgroundColor(colors[secondaryColor].contrastColor);
      invert = true;
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, { backgroundColor: choosenColor}]}>
        <Image source={source} style={[styles.image, {borderRadius: 100}]} /> 
        <Text style={[styles.checkbox, {color: choosenBackgroundColor}]} >
          {children}
        </Text>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    padding: 8,
    paddingTop: 18,
    borderRadius: 12,
    width: '100%',
    display: 'block',
  },
  image: {
    height: 40,
    width: 40,
    position: 'relative',
    float: 'left',
    marginTop: -10,
  },
  checkbox: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginLeft: 20,
  },
})
