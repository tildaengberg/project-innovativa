import { View, StyleSheet, Text,TouchableWithoutFeedback} from 'react-native'
import colors from '../config/colors'
import StyledText from '../config/StyledText'
{/* <Moodstory name= 'Agneta' emoji = '&#x1F600;' onPress={() => console.log('Click på emoji')}/> */}

const Moodstory = ({name,emoji,onPress,disabled=false}) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.moodstory]}>
        <Text style={styles.moodStoryEmoji}>
            {emoji}
        </Text>
        <StyledText textStyle='bodySmall' textAlign='center' textColor={colors.background.contrastColor}>
            {name}
        </StyledText>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Moodstory

const styles = StyleSheet.create({
  moodstory: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 12,
    width: 103,
    height: 146,
    backgroundColor: colors.white.main,    
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginRight:10,
    marginVertical:10
  },
  moodStoryEmoji: {
    fontSize: 50,
    textAlign: 'center'
  }
})