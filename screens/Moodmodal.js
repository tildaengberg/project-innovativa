import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ProfilePic from "../components/ProfilePic";
import StyledText from "../config/StyledText";
import MarginBox from "../config/MarginBox";
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors'
import Moodstory from "../components/Moodstory";

const Moodmodal = () => {
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
            
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={[{width: '100%'}]}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Icon name='chevron-back' size={25} color={colors["black"].main} />
                    </Pressable>
                </View>
            
                <ProfilePic profile={require('../assets/profile.png')} size={150}></ProfilePic>
                <StyledText textStyle='h3'>
                    Emma Svensson
                </StyledText>
                <View style={styles.descriptionText}>
                    <StyledText textStyle='bodySmall'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </StyledText>
                </View>
                
            </View>
            </View>
        </Modal>
        <Moodstory onPress={() => setModalVisible(true)}></Moodstory>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  }
});

export default Moodmodal;