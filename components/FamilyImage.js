
import { View, StyleSheet, Image } from 'react-native'

const FamilyImage = () => {
  return (
    <View>
      <Image style={styles.holder} source={require('../assets/images/coverImage.jpg')}></Image>
    </View>
  )
}

export default FamilyImage

const styles = StyleSheet.create({
  holder: {
    width:'100%',
    height:310
  },
})
