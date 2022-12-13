import { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import colors from '../config/colors'

const MoodChoice = ({emoji, children, last = false}) => {  
  
  const [chosenEmoji, setChosenEmoji] = useState();
  const onPress = () => {
    setChosenEmoji(emoji);
  }
  
  return (
    <TouchableOpacity onPress={onPress} children={children}>
      <View style={styles.moodBackground}>
        {last ? <Image source = {require('../assets/addicon.png')} style = {styles.last}></Image> : <Text style={styles.centered}>{emoji}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default MoodChoice

const styles = StyleSheet.create({
  moodBackground: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    width:50,
    height:50,
    backgroundColor: colors.background.main,
    borderRadius: '100%',

  },
  centered: {
    flex: 'flex',
    justifyContent: 'center',
    fontSize: '26'
  },
  last: {
    width: '40%',
    height: '40%'
  }
})
