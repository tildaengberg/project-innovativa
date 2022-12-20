import React from 'react'
import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import ProfilePic from '../components/ProfilePic'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Summary from '../components/Summary'

const Family = () => {
  return (
    <View style={MarginBox.container}>
      <StyledText>Familj</StyledText>
      <View style={[styles.centered, styles.fullHeight]}>
        <StyledText textStyle='h3'>
            Vilka vill du dela?
        </StyledText>
        <StyledText textStyle='bodySmall'>
            Välj de familjer du vill uppdatera
        </StyledText>
        <Summary picture={require('../assets/favicon.png')} profile={require('../assets/profile.png')} style={[{marginTop:50}]} />
        <Checkbox source={require('../assets/favicon.png')}>
            Familj 1
        </Checkbox>
        <Checkbox source={require('../assets/favicon.png')}>
            Familj 2
        </Checkbox>
        <View style={[styles.bottom, {width:'100%'}]}>
            <Button color='yellow'>Publicera</Button>
            <View style={[styles.centered, {marginTop:10}]}>
                <Button color={'transparent'} children={'Inte nu >'}></Button>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Family

const styles = StyleSheet.create({
  centered: {
    alignItems:'center',
    justifyContent:'center',
    zIndex:1,
  },
  bottom: {
    marginTop: 'auto',
  },
  fullHeight: {
    height:'100%',
  }
})