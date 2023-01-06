import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import { Image } from 'react-native'
import Button from '../components/Button'

const DailyPicChallenge = ({ navigation }) => {
  const mood = 'glad'

  return (
    <View style={MarginBox.container}>
      <View style={styles.fullHeight}>
        <View style={{ paddingTop: 50 }}>
          <StyledText textAlign='center' textStyle='h1'>
            Dagens bildutmaning
          </StyledText>
          <StyledText textAlign='center' textStyle='bodySmall'>
            Ta en bild på någonting som gör dig{' '}
            <StyledText textStyle='button'>{mood}</StyledText>
          </StyledText>
        </View>
        <Image
          style={styles.imageStyle}
          source={require('../assets/challengeImage.png')}
        ></Image>
        <View style={styles.bottom}>
          <Button
            color={'yellow'}
            children={'Nästa'}
            onPress={() => navigation.navigate('Post')}
          ></Button>
          <Button
            color={'transparent'}
            children={'Inte nu >'}
            onPress={() => navigation.navigate('Feed')}
          ></Button>
        </View>
      </View>
    </View>
  )
}

export default DailyPicChallenge

const styles = StyleSheet.create({
  fullHeight: {
    height: '100%',
  },
  imageStyle: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '60%',
    marginTop: 100,
    height: 300,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },
})
