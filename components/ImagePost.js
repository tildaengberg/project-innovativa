import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'react-native';
import SmallProfilePic from './SmallProfilePic';
import Like from './Like'
import Comments from './Comments'
import StyledText from '../config/StyledText';
import { useState } from 'react';
import { Dimensions } from 'react-native';

const ImagePost = ({post, user, emoji}) => {

  //const image = //require('../assets/testImage.jpg');
  const text = post.comment;

  return (
      <View style={{marginBottom:16}}>
          <SmallProfilePic profile={user.profilePic} emoji={emoji} name={user.firstName} location={post.location} time={post.time} />
          <Image resizeMode="cover" style={styles.imgStyle} source={post.image} />
          <StyledText textColor={'grey'} nrOfLines={1000} textStyle={'bodySmallest'}>{text}</StyledText>
          <View style ={styles.likeAndCommentPost}>
              <Like color = 'black' onPress ={()=> console.log("klick hjärta")}>{post.nrOfLikes}</Like>
              <Comments color = 'black' onPress ={()=> console.log("klick kommentar")}>{post.nrOfComments}</Comments>
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
    marginBottom: 5
  },
  likeAndCommentPost:{
    display: 'flex',
    flexDirection: 'row',
    width:'28%',
    justifyContent: 'space-between',
    marginBottom:10,
  }
})