import { View, StyleSheet } from 'react-native'
import StyledText from '../config/StyledText'
import ProfilePic from './ProfilePic'
import colors from '../config/colors'

const smallProfilePic = ({profile, emoji, name, location, time}) => {
  return (
    <View style={styles.holder}>
        <ProfilePic profile ={profile} emoji={emoji} size={60}></ProfilePic>
        <View style={styles.information}>
            <StyledText textStyle='bodyLarge' textAlign='left' textColor={colors.background.contrastColor}>{name}</StyledText>
            <StyledText textStyle='bodySmallest' textAlign='left' textColor={colors.background.contrastColor}>{location}{time}</StyledText>
        </View>
    </View>
  )
}

export default smallProfilePic

const styles = StyleSheet.create({
    holder: {
      display:'flex',
      flexDirection:'row'
    },
    information:{
        marginLeft:10,
    }
  })