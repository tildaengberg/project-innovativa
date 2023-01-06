import { View, StyleSheet} from 'react-native'
import colors from '../config/colors'
import StyledText from '../config/StyledText'
import Like from './Like'
import Comments from './Comments'
import SmallProfilePic from './SmallProfilePic'


const TextPost = ({post}) => {

  return (
    <View style={{marginBottom:16}}>
        <SmallProfilePic profile={require("../assets/profile.png")} emoji='&#128542;' name='Emma' location={post.location} time={post.time} />
        <View style={[styles.textPost]}>
            <StyledText textStyle='bodySmall' textColor={colors.background.contrastColor}>
                {post.content}
            </StyledText>
        </View>
        <View style ={styles.likeAndCommentPost}>
            <Like color = 'black' onPress ={()=> console.log("klick hjärta")}>{post.nrOfLikes}</Like>
            <Comments color = 'black' onPress ={()=> console.log("klick kommentar")}>{post.nrOfComments}</Comments>
        </View>
    </View>
  )
}

export default TextPost

const styles = StyleSheet.create({
  textPost: {
    alignItems:'flex-start',
    justifyContent:'center',
    padding:15,
    borderRadius: 15,
    width: '100%',
    backgroundColor: colors.white.main
  },
  likeAndCommentPost:{
    display: 'flex',
    flexDirection: 'row',
    width:'28%',
    justifyContent: 'space-between',
    marginTop:10,
    marginBottom:10,
  }
})