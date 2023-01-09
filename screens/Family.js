import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Summary from '../components/Summary'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Family = ({ navigation }) => {
  const [image, setImage] = useState()

  const getData = async () => {
    try {
      const image = await AsyncStorage.getItem('image')
      const text = await AsyncStorage.getItem('text')
      setImage(JSON.parse(image))
      return image != null ? JSON.parse(image) : null
    } catch (e) {
      alert('Can not get image')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={MarginBox.container}>
      <View style={[styles.fullHeight]}>
        <View style={[styles.centered, { paddingTop: 50 }]}>
          <StyledText textStyle='h3'>Vilka vill du dela?</StyledText>
          <StyledText textStyle='bodySmall'>
            Välj de familjer du vill uppdatera
          </StyledText>
        </View>
        <Summary
          emoji='&#129395;'
          image_size={140}
          picture={image}
          profile={require('../assets/profile.png')}
          style={[{ marginTop: 50 }]}
        />
        <View
          style={{
            flex: 0.5,
            justifyContent: 'space-between',
            marginBottom: 32,
          }}
        >
          <Checkbox source={require('../assets/images/family1.jpeg')}>
            Familjen Lindgren
          </Checkbox>
          <Checkbox source={require('../assets/images/family2.jpeg')}>
            Familjen Lindqvist
          </Checkbox>
        </View>
        <View style={[styles.bottom, { width: '100%' }]}>
          <Button color='yellow' onPress={() => navigation.navigate('Feed')}>
            Publicera
          </Button>
          <View style={[styles.centered]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    marginTop: 'auto',
  },
  fullHeight: {
    height: '100%',
  },
})
