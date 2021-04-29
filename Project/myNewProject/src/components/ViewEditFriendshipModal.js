import React, { useState } from 'react';
import {Modal, View, Text, Button,TouchableHighlight, TouchableOpacity} from 'react-native';

export default function ViewEditFriendshipModal(props){
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visibility}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection:'row'}}>
            <Text style={{/*fontFamily:'Avenir',*/ fontWeight:'bold',fontSize:20}}>Do you wish to remove friend?</Text>
          </View>
          <TouchableHighlight
                style={styles.openButton} 
                onPress={()=>{props.closeModal; props.remove()}}
          >
            <Text style={{...styles.textStyle, color:'#eb2d23'}}>YES, REMOVE FRIEND</Text>
          </TouchableHighlight>
          <TouchableHighlight
                style={styles.openButton} 
                onPress={props.closeModal}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableHighlight>
        </View>
      </View>
      </Modal>   
    </View>
  );
}

//props.item.phone
const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(100,100,100, 0.9)',
    padding: 20,
  },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "#dfeced",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    openButton: {
      backgroundColor: "#37a3c4",
      borderRadius: 20,
      padding: 10,
      margin: 2
    }
};