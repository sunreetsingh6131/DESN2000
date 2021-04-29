import * as React from 'react';
import {Modal, View, Text, Button,TouchableHighlight, TouchableOpacity} from 'react-native';

export default function ViewLocationModal(props){
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
            <Text style={{/*fontFamily:'Avenir',*/ fontSize:20}}>Currently at: </Text>
            <Text style={{/*fontFamily:'Avenir',*/ fontWeight:'bold', fontSize:20}}>PYRMONT</Text>
          </View>
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
      backgroundColor: 'white',
      //backgroundColor: "#dfeced",
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
      //backgroundColor: "#37a3c4",
      backgroundColor: "#666561",
      borderRadius: 20,
      padding: 10,
      margin: 2
    }
};
