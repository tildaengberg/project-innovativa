import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import Input from '../components/Input'
import ProfilePic from '../components/ProfilePic'
import MoodPicker from '../components/MoodPicker'
import Button from '../components/Button'
import { useState } from 'react'

const Home = ({ navigation }) => {
  const [chosenEmoji, setChosenEmoji] = useState('')
  const [textInputValue, setTextInputValue] = useState('')

  return (
    <View style={MarginBox.container}>
      <View style={styles.fullHeight}>
        <View style={{ paddingTop: 50 }}>
          <StyledText
            textAlign={'center'}
            textStyle={'h3'}
            style={styles.centered}
          >
            Kul att se dig, Emma!
          </StyledText>
          <StyledText
            textAlign={'center'}
            textStyle={'bodySmall'}
            style={styles.centered}
          >
            Hur mår du idag?
          </StyledText>
        </View>
        <View style={[styles.centered, { marginTop: 100 }]}>
          <ProfilePic
            profile={require('../assets/profile.png')}
            emoji={chosenEmoji}
            size={150}
          ></ProfilePic>
        </View>
        <View style={[styles.centered, { marginTop: 10 }]}>
          <MoodPicker
            chosenEmoji={chosenEmoji}
            setChosenEmoji={setChosenEmoji}
          />
        </View>

        <View style={styles.bottom}>
          <View style={{ marginBottom: 20 }}>
            <Input
              textInputValue={textInputValue}
              setTextInputValue={setTextInputValue}
            />
          </View>
          <Button
            color={'yellow'}
            children={'Nästa'}
            onPress={() => navigation.navigate('DailyPicChallange')}
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

export default Home

const styles = StyleSheet.create({
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },
  fullHeight: {
    height: '100%',
  },
})
