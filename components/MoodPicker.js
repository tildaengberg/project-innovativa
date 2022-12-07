import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import MoodChoice from './MoodChoice'

const MoodPicker = () => {
  return (
    <View style={styles.container}>
        <MoodChoice emoji='&#128546;'></MoodChoice>
        <MoodChoice emoji='&#128532;'></MoodChoice>
        <MoodChoice emoji='&#128578;'></MoodChoice>
        <MoodChoice emoji='&#9786;'></MoodChoice>
        <MoodChoice emoji='&#129395;'></MoodChoice>
        <MoodChoice last={true}></MoodChoice>
    </View>
  )
}

export default MoodPicker

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between'
  },
})
