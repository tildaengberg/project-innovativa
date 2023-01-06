import { ScrollView, View } from 'react-native'
import FamilyImage from '../components/FamilyImage'
import ImagePost from '../components/ImagePost'
import TextPost from '../components/TextPost'
import { StyleSheet } from 'react-native'
import FamilyName from '../components/FamilyName'
import colors from '../config/colors'
import MoodstorySpinner from '../components/MoodstorySpinner'
import data from '../assets/info.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import moment from 'moment';


const Feed = () => {

  const [image, setImage] = useState()
  const [text, setText] = useState()

  const getData = async () => {
    try {
      const image = await AsyncStorage.getItem('image')
      const text = await AsyncStorage.getItem('text')
      setImage(JSON.parse(image))
      setText(text)
      return image != null ? JSON.parse(image) : null
    } catch (e) {
      alert('Can not get image')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  var date = moment().utcOffset('+01:00').format('HH:mm');

  const staticPost = [
    {
      image: image,
      comment: text,
      time: date,
      location:"Umeå, Sverige",
      nrOfLikes: 0,
      nrOfComments:0
    }
  ]

const imagePost = [
    {
      ownerID:1,
      image: require("../assets/images/mat.png"),
      comment:"Idag har vi varit och köpt mat på det nya stället i stan!",
      time: "12.44",
      location:"Umeå, Sverige",
      nrOfLikes: 2,
      nrOfComments:1
    }, {
      ownerID:2,
      image: require("../assets/images/tureLeker.jpeg"),
      comment:"Ture älskade att det kom lite regn idag! Favoritleken är att hoppa i vattenpölar!",
      time: "13.47",
      location:"Umeå, Sverige",
      nrOfLikes: 3,
      nrOfComments:0
    }
    ]

    const users = [

      {
        id:0,
        firstName: "Isa",
        LastName: "Johansson",
        age: 82,
        profilePic:require("../assets/images/isaProfile.jpeg")
      },
      {
        id: 1,
        firstName: "Elias",
        LastName: "Johansson",
        age: 32,
        profilePic:require("../assets/images/eliasProfile.jpg")
      }, {
        id: 2,
        firstName: "Emma",
        LastName: "Johansson",
        age: 32,
        profilePic:require("../assets/images/emmaProfile.png")
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
                <ImagePost post={staticPost[0]} user={users[0]} emoji='&#129395;'></ImagePost>
                <TextPost post={data.textPosts[0]}></TextPost>
                <ImagePost post={imagePost[0]} user={users[imagePost[0].ownerID]} emoji='&#9786;'></ImagePost>
                <ImagePost post={imagePost[1]} user={users[imagePost[1].ownerID]} emoji='&#128542;'></ImagePost>
            </View>
        </ScrollView>
    </View>
    )
}

export default Feed

const styles = StyleSheet.create({
  margin: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.background.main,
  },
})

