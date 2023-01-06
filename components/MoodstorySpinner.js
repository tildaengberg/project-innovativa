import {ScrollView, Text, View } from 'react-native'
import colors from '../config/colors'
import Moodstory from './Moodstory'

/**
 * 
 * Not working with the smiley right now :) 
 * Also not going full screen :) 
 *   const sampleList = [
    { name: 'Agneta', emoji:'&#x1F600;'},
    { name: 'Eva', emoji:'&#x1F600;'},
    ];
 * <MoodstorySpinner list ={sampleList}/>
 * 
 */

const MoodstorySpinner = () => {
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:colors.background.main, paddingLeft:16, paddingBottom:30}}>
      <Moodstory name= {"Isa"} emoji='&#129395;' onPress={() => console.log('Click på emoji')}/>
      <Moodstory name= {"Elias"} emoji='&#9786;' onPress={() => console.log('Click på emoji')}/>
      <Moodstory name= {"Anders"} emoji='&#129409;' onPress={() => console.log('Click på emoji')}/>
      <Moodstory name= {"Emelie"} emoji='&#9996;' onPress={() => console.log('Click på emoji')}/>
      <Moodstory name= {"Hanna"} emoji='&#129312;' onPress={() => console.log('Click på emoji')}/>
      <Moodstory name= {"Emma"} emoji='&#128542;' onPress={() => console.log('Click på emoji')}/>
    </ScrollView>
  )
}

export default MoodstorySpinner