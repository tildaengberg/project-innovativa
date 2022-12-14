import {ScrollView } from 'react-native'
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

const MoodStorySpinner = ({list}) => {
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            list.map((item) =>{
                return(
                    <Moodstory name= {item.name} emoji={item.emoji} onPress={() => console.log('Click på emoji')}/>
                )
            })
        }
    </ScrollView>
  )
}

export default MoodStorySpinner