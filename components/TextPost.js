import { View, StyleSheet} from 'react-native'
import colors from '../config/colors'
import StyledText from '../config/StyledText'
import Like from './Like'
import Comments from './Comments'
import SmallProfilePic from './SmallProfilePic'


const TextPost = () => {

  return (
    <View>
        <SmallProfilePic profile={require("../assets/profile.png")} emoji='&#128546;' name='Emma' location='Sverige, Umeå ' time='17.22' />
        <View style={[styles.textPost]}>
            <StyledText textStyle='bodySmall' textAlign='left' textColor={colors.background.contrastColor}>
                {"Lorem ipsum dolor sit amet consectetur. Dictum quam non fringilla bibendum adipiscing suspendisse urna. Iaculis metus faucibus maecenas aliquam."}
            </StyledText>
        </View>
        <View style ={styles.likeAndCommentPost}>
            <Like color = 'black' onPress ={()=> console.log("klick hjärta")}>2</Like>
            <Comments color = 'black' onPress ={()=> console.log("klick kommentar")}>2</Comments>
        </View>
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
  },
  likeAndCommentPost:{
    display: 'flex',
    flexDirection: 'row',
    width:'35%',
    justifyContent: 'space-between',
    marginTop:10,
    marginBottom:10,
  }
})