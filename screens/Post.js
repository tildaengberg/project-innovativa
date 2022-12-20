import { useEffect, useRef, useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import MarginBox from '../config/MarginBox'
import ActionButton from '../components/ActionButton'
import { Camera } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons'
import Button from '../components/Button'

const Post = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [photo, setPhoto] = useState('')
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const ref = useRef(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const _takePhoto = async () => {
    const photoData = await ref.current.takePictureAsync()
    setPhoto(photo)
    console.log(photoData)
  }

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
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
      <ImageBackground source={photo} style={styles.image} resizeMode='cover'>
        <View style={[styles.actionButton, MarginBox.container]}>
          <ActionButton
            onPress={() => {
              setPhoto('')
            }}
            color='black'
            text='Tillbaka'
          />
        </View>
        <Button color='yellow' onPress={() => console.log('Save')}>
          Nästa
        </Button>
      </ImageBackground>
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
  controls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 0.25,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  actionButton: { paddingTop: 50 },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 0.25,
    zIndex: 10,
  },
})
