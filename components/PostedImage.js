import { View, Image, StyleSheet } from 'react-native'

const PostedImage = (image) => {

  //Just for testing
  image = require('../assets/profile.png');

  return (
    <View style={{ aspectRatio: 1 }}>
      <Image resizeMode="cover" style={styles.imgStyle} source={image} />
    </View>
  )
}

export default PostedImage

const styles = StyleSheet.create({
  imgStyle: {
    aspectRatio:1,
    height: '100%',
    borderRadius:10,
  }
})