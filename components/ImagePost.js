import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'react-native';
import SmallProfilePic from './SmallProfilePic';
import Like from './Like'
import Comments from './Comments'
import StyledText from '../config/StyledText';
import { useState } from 'react';
import { Dimensions } from 'react-native';

const ImagePost = () => {

  //Just for testing
  const image = require('../assets/profile.png');
  const text = "Tja tja bloggen, det här är en bild på mig som jag tycker är väldigt tjusig. Hoppas er dag har varit makalöst underbar 😘✅"

  const [showAllText, setShowAllText] = useState(false);

  const onPress = () => {
    setShowAllText(true)
  }

  return (
      <View>
          <SmallProfilePic profile={image} emoji='&#128546;' name='Emma' location='Sverige, Umeå ' time='17.22' />
          <Image resizeMode="cover" style={styles.imgStyle} source={image} />
          {showAllText === true ? <StyledText textColor={'grey'} nrOfLines={1000} textStyle={'bodySmallest'}>{text}</StyledText> : <StyledText textColor={'grey'} nrOfLines={2} textStyle={'bodySmallest'}>{text}</StyledText> }
          {showAllText === true ? "" : <Text onPress={onPress} style={styles.viewMore}>Visa mer</Text>}
          <View style ={styles.likeAndCommentPost}>
              <Like color = 'black' onPress ={()=> console.log("klick hjärta")}>3</Like>
              <Comments color = 'black' onPress ={()=> console.log("klick kommentar")}>2</Comments>
          </View>
      </View>
  )
}

export default ImagePost

const styles = StyleSheet.create({
  imgStyle: {
    width:'100%',
    height: Dimensions.get('window').width-32,
    borderRadius: 15,
  },
  likeAndCommentPost:{
    display: 'flex',
    flexDirection: 'row',
    width:'32%',
    justifyContent: 'space-between',
    marginBottom:10,
  },
  viewMore: {
    display:'flex', 
    textAlign:'right',
    color:'grey',
  }
})