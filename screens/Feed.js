<<<<<<< HEAD
import { ScrollView, View } from 'react-native'
import FamilyImage from '../components/FamilyImage'
import ImagePost from '../components/ImagePost'
import TextPost from '../components/TextPost'
import { StyleSheet } from 'react-native'
import FamilyName from '../components/FamilyName'
import colors from '../config/colors'
import MoodstorySpinner from '../components/MoodstorySpinner'
import data from '../assets/info.json'


const Post = () => {

const imagePost = [
    {
        ownerID:1,
        image: require("../assets/images/mat.png"),
        comment:"Idag har vi varit och köpt mat på det nya stället i stan!",
        time: "17.44",
        location:"Umeå, Sverige",
        nrOfLikes: 2,
        nrOfComments:1
    }
    ]

    const users = [

    {
        id: 1,
        firstName: "Elias",
        LastName: "Johansson",
        age: 32,
        profilePic:require("../assets/images/eliasProfile.jpg")
    }
    
    ]

  return (
    <View style={{height:'100%'}}>
        <FamilyName></FamilyName>
        <ScrollView>
        <FamilyImage></FamilyImage>
            <View style={styles.spinnerStyle}>
                <MoodstorySpinner></MoodstorySpinner>
            </View>
        
            <View style={styles.margin}>
                <TextPost post={data.textPosts[0]}></TextPost>
                <ImagePost post={imagePost[0]} user={users[0]} emoji='&#9786;'></ImagePost>
            </View>
        </ScrollView>
    </View>
    )
}

export default Post

const styles = StyleSheet.create({
  margin: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.background.main,
  },
})

=======
import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import Input from '../components/Input'
import ProfilePic from '../components/ProfilePic'
import MoodPicker from '../components/MoodPicker'
import Button from '../components/Button'
import { useState } from 'react'
import FamilyImage from '../components/FamilyImage'


const Feed = () => {

  return (
    //<View style={MarginBox.container}>
      <View style={styles.fullHeight}>
      </View>
    //</View>
  )
}

export default Feed

const styles = StyleSheet.create({
  fullHeight: {
    height:'100%',
  }
})
>>>>>>> 462d5ed8b6f14f47136eaffae8f9aed3ac905923
