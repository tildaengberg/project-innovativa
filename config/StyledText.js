import { Text, StyleSheet } from 'react-native'
import colors from '../config/colors'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins'

// ! Config of font and sizes

const StyledText = ({
  textStyle = 'bodySmall',
  textColor = 'black',
  textAlign = 'left',
  children,
  nrOfLines,
}) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }
  return (
    <Text
    numberOfLines={nrOfLines}
      style={[
        { color: colors[textColor].main, textAlign: textAlign },
        styles[textStyle],
      ]}
    >
      {children}
    </Text>
  )
}

export default StyledText

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 40,
    lineHeight: 60,
  },
  h2: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    lineHeight: 60,
  },
  h3: { fontFamily: 'Poppins_700Bold', fontSize: 24, lineHeight: 36 },
  bodySmallest: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  bodyLarge: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
  },
  button: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  like: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  smallAction: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    lineHeight: 24,
  },
})
