import { useRef, useState } from 'react'
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import MarginBox from '../config/MarginBox'
import ActionButton from '../components/ActionButton'
import { Camera } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import StyledText from '../config/StyledText'

const Post = ({ navigation }) => {
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [photo, setPhoto] = useState('')
  const [text, setText] = useState('')
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const ref = useRef(null)

  const _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync()
    setPhoto(photo)
    console.log(photo)
  }

  const storeData = async (image, text) => {
    try {
      const jsonImg = JSON.stringify(image)
      await AsyncStorage.setItem('image', jsonImg)
      await AsyncStorage.setItem('text', text)
    } catch (e) {
      alert('Can not save')
    }
  }

  if (photo == '') {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={type}
          ref={ref}
          flashMode={flash}
        ></Camera>
        <View style={[styles.controls]}>
          <View style={[MarginBox.container, styles.buttons]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                )
              }}
            >
              <Ionicons name='ios-camera-reverse-outline' size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={_takePhoto} style={styles.button}>
              <Ionicons name='ios-radio-button-on' size={50} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.torch
                    : Camera.Constants.FlashMode.off
                )
              }}
              style={styles.button}
            >
              <Ionicons
                name={flash ? 'ios-flash' : 'ios-flash-off-outline'}
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  } else {
    return (
      <View style={[styles.strech]}>
        <View>
          <ActionButton
            onPress={() => {
              setPhoto('')
            }}
            color='black'
            text='Tillbaka'
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <View style={{ alignItems: 'center', flex: 1, marginTop: 50 }}>
            <StyledText textAlign='center' textStyle='h3'>
              Dagens bildutmaning
            </StyledText>
            <StyledText textAlign='center' textStyle='bodySmall'>
              Ta en bild på någonting som gör dig glad
            </StyledText>
            <Image
              source={photo}
              style={{
                width: 360,
                height: 360,
                borderRadius: 12,
                marginTop: 25,
              }}
            />
          </View>
          <View style={{ justifyContent: 'space-around' }}>
            <TextInput
              onChangeText={setText}
              value={text}
              style={styles.input}
              placeholder='Skriv din text här...'
            />
            <Button
              color='yellow'
              onPress={() => {
                storeData(photo, text)
                navigation.navigate('Family')
              }}
            >
              Nästa
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default Post

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  strech: {
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 3,
    backgroundColor: 'red',
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 0.25,
    zIndex: 10,
  },
  input: {
    maxHeight: 100,
    padding: 10,
    height: 65,
    borderColor: 'grey',
    borderWidth: 1,
    placeholderTextColor: 'gray',
    borderRadius: '10',
    backgroundColor: 'white',
    marginBottom: 16,
  },
})
