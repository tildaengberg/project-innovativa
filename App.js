import { View } from 'react-native'
import Button from './components/Button'
import ProfilePic from './components/ProfilePic'
import MarginBox from './config/MarginBox'
import StyledText from './config/StyledText'

export default function App() {
  return (
    <View style={MarginBox.container}>
      <StyledText textStyle='h2'>Hejsan hoppsan!</StyledText>
      <StyledText>
        Har lagt in lite konfigurationer med färger, marginaler och typsnitt.
      </StyledText>
      <Button color='yellow' onPress={() => console.log('Click')}>
        Testknapp
      </Button>
      <ProfilePic profile={require("./assets/profile.png")} emoji={require("./assets/favicon.png")} onPress={() => console.log('Profile')} height={100} width={100}/>
    </View>
  )
}
