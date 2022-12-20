import { View, StyleSheet } from 'react-native'
import MarginBox from '../config/MarginBox'
import StyledText from '../config/StyledText'
import { Image } from 'react-native'
import Input from '../components/Input'
import ProfilePic from '../components/ProfilePic'
import MoodPicker from '../components/MoodPicker'
import Button from '../components/Button'
import { useState } from 'react'


const DailyPicChallenge = () => {
    
    const mood = "glad"

    const onPressNext = () => {
        //Skicka detta data
        console.log(chosenEmoji);
        console.log(textInputValue);
      }
    
      const onPressNotNow = () => {
        console.log("not now");
      }
    return (
        <View style={MarginBox.container}>
            <View style={styles.fullHeight}>
                <StyledText textAlign='center' textStyle='h1'>Dagens bildutmaning</StyledText>
                <StyledText textAlign='center' textStyle='bodySmall'>Ta en bild på någonting som gör dig <StyledText textStyle='button'>{mood}</StyledText></StyledText>
                <Image style={styles.imageStyle} source={require('../assets/challengeImage.png')}></Image>
                <View style={styles.bottom}>
                    <Button color={'yellow'} children={'Nästa'} onPress={onPressNext}></Button>
                    <Button color={'transparent'}children={'Inte nu >'} onPress={onPressNotNow}></Button>
                </View>
            </View>
        </View>
    )
}

export default DailyPicChallenge

const styles = StyleSheet.create({

    fullHeight: {
        height:'100%'
    },
    imageStyle: 
    {
        alignSelf: 'center',
        resizeMode:'contain',
        width:'60%',
        marginTop:100,
        height:300,
    },
    bottom: {
        flex:1,
        justifyContent:'flex-end',
        height:'100%',
    }
})