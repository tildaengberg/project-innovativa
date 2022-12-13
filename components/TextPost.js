import { View, StyleSheet, Text,TouchableWithoutFeedback} from 'react-native'
import colors from '../config/colors'
import StyledText from '../config/StyledText'

{/* <Moodstory name= 'Agneta' emoji = '&#x1F600;' onPress={() => console.log('Click på emoji')}/> 
        <Like color = 'black' onPress ={()=> console.log("klick hjärta")}>2</Like>
        <Comments color = 'black' onPress ={()=> console.log("klick kommentar")}>2</Comments>*/}

const TextPost = () => {
  return (
    <View style={[styles.textPost]}>
        <StyledText textStyle='bodySmall' textAlign='left' textColor={colors.background.contrastColor}>
            {"Lorem ipsum dolor sit amet consectetur. Dictum quam non fringilla bibendum adipiscing suspendisse urna. Iaculis metus faucibus maecenas aliquam."}
        </StyledText>

    </View>
  )
}

export default TextPost

const styles = StyleSheet.create({
  textPost: {
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    borderRadius: 15,
    width: '100%',
    backgroundColor: colors.background.main
  }
})