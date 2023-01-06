import {ScrollView, Text, View } from 'react-native'
import colors from '../config/colors'
import MoodModal from './Moodmodal'

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
      <MoodModal name= {"Isa"} emoji='&#129395;' onPress={() => console.log('Click på emoji')}/>
      <MoodModal name= {"Elias"} emoji='&#9786;' onPress={() => console.log('Click på emoji')}/>
      <MoodModal name= {"Anders"} emoji='&#129409;' onPress={() => console.log('Click på emoji')}/>
      <MoodModal name= {"Emelie"} emoji='&#9996;' onPress={() => console.log('Click på emoji')}/>
      <MoodModal name= {"Hanna"} emoji='&#129312;' onPress={() => console.log('Click på emoji')}/>
      <MoodModal name= {"Emma"} emoji='&#128542;' onPress={() => console.log('Click på emoji')}/>
    </ScrollView>
  )
}

export default MoodstorySpinner