
import { View, StyleSheet } from 'react-native'
import StyledText from '../config/StyledText'

const FamilyImage = () => {
  return (

    <View style={styles.familiyName}>
        <StyledText textStyle='h3' textAlign='center'>Familjen Svensson {'>'}</StyledText>
    </View>

  )
}

export default FamilyImage

const styles = StyleSheet.create({
  familiyName:{
    position:'absolute',
    width:'100%',
    height:120,
    top:0,
    zIndex:1,
    backgroundColor:'white',
    opacity:0.97,
    paddingTop:65,
  },
})
