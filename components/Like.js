import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import StyledText from '../config/StyledText'

const Like = ({ color = 'black', children, disabled = false }) => {
  const [liked, setLiked] = useState(false)

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPress={() => setLiked(!liked)}
    >
      <View style={[styles.holder]}>
        <Ionicons
          name={liked ? 'ios-heart' : 'ios-heart-outline'}
          color={liked ? 'green' : 'black'}
          size={25}
        />
        <StyledText textStyle='like' textColor={color}>
          {children}
        </StyledText>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Like

const styles = StyleSheet.create({
  holder: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
