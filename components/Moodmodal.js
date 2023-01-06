import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import StyledText from "../config/StyledText";
import MarginBox from "../config/MarginBox";
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors'
import Moodstory from "./Moodstory";

const Moodmodal = ({emoji, name}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.centeredView, MarginBox.container]}>
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            
            <View style={[styles.centeredView, {backgroundColor: colors["grey"].main}]}>
            <View style={[styles.modalView, MarginBox.container]}>
                <View style={[{width: '100%'}]}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Icon name='chevron-back' size={25} color={colors["black"].main} />
                    </Pressable>
                </View>
            
                <Text style={[styles.emoji, {fontSize: 100}]}>{emoji}</Text>
                <StyledText textStyle='h3'>
                    {name}
                </StyledText>
                <View style={styles.descriptionText}>
                    <StyledText textStyle='bodySmall'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </StyledText>
                </View>
                
            </View>
            </View>
        </Modal>
        <Moodstory emoji={emoji} name={name} onPress={() => setModalVisible(true)}></Moodstory>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: '100%',
    height: '100%',
    margin: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  descriptionText: {
    marginTop: 50,
    padding: 16
  },
  emoji: {
    marginTop: 100,
    padding: 16,
    marginBottom: 8,
},
});

export default Moodmodal;