import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import MoodChoice from './MoodChoice'
import { useState } from 'react'
import EmojiSelector, {Categories} from 'react-native-emoji-selector'
import colors from '../config/colors'


const MoodPicker = ({ chosenEmoji, setChosenEmoji}) => {
  
  var last = false;
  const [showSelector, setShowSelector] = useState(false);

  const onPress = (emoji) => {
    setShowSelector(false);
    if(last === false) {
      setChosenEmoji(emoji);
    }
  }

  const onLastPress = () => {
    setShowSelector(!showSelector);
  }

  return (
    <View style={[showSelector===true ? styles.bgLarge :  styles.bg]}> 
      <View style={styles.container}>
        <MoodChoice emoji='&#128546;' onPress={onPress}></MoodChoice>
        <MoodChoice emoji='&#128532;' onPress={onPress}></MoodChoice>
        <MoodChoice emoji='&#128578;' onPress={onPress}></MoodChoice>
        <MoodChoice emoji='&#9786;' onPress={onPress}></MoodChoice>
        <MoodChoice emoji='&#129395;' onPress={onPress}></MoodChoice>
        <MoodChoice last={true} onPress={onLastPress}></MoodChoice>
      </View>
      {showSelector === true ? <EmojiSelector
        category={Categories.emotion}
        onEmojiSelected={emoji => {setChosenEmoji(emoji), setShowSelector(false)}} /> : null}
    </View>
  )
}

export default MoodPicker

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'100%',
  },
  bg: {
    width: '100%',
    backgroundColor: colors.background.main,
  },
  bgLarge: {
    width: '100%',
    backgroundColor:colors.background.main,
    height: '100%',
  }
})
