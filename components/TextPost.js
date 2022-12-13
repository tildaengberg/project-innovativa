import { View, StyleSheet, Text,TouchableWithoutFeedback} from 'react-native'
import colors from '../config/colors'
import StyledText from '../config/StyledText'
{/* <Moodstory name= 'Agneta' emoji = '&#x1F600;' onPress={() => console.log('Click på emoji')}/> */}

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
    borderRadius: 12,
    width: '100%',
    height: 146,
    backgroundColor: colors.background.main
  }
})