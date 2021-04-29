import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, TextInput, Modal, SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function AddFriendScreen() {
    const navigation = useNavigation();
    var emptyText = false;
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <View style={styles.contentContainer}>
      <SafeAreaView style={{ backgroundColor: '#40484a' }} />
      <TextInput
            textAlign={'center'}
            placeholder="Search Friend"
            placeholderTextColor="#dddddd"
            style={{
              borderRadius: 6,
              backgroundColor: '#2f363c',
              height: 50,
              /*fontFamily: 'Avenir',*/
              fontSize: 18,
              margin: 20,
              color: 'white',
            }}
            onChangeText={(value)=> {if (value != ''){emptyText = true;console.log(emptyText);
              } else {
                emptyText=false;
                console.log(emptyText);
              }
            }
            }
      />
      <View style={{flexDirection:'row', justifyContent: 'space-between', marginLeft:'25%', marginRight:'25%'}}>
        <Button
            title="Add"
            color='white'
            onPress={()=>setModalVisible(!modalVisible)}
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Friend Request Sent!</Text>
            <TouchableHighlight
                  style={styles.openButton} 
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
              >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableHighlight>
          </View>
        </View>
        </Modal>
        
        <Button
              title="Go Back"
              color='white'
              onPress={() => navigation.goBack()}
        />
      </View>
    </View>
    ); 
}

function getSearchResult(value, emptyText){
  if (value != ''){
    emptyText = true;
    console.log("true");
    return true
  } else {
    emptyText=false;
    console.log("false");
    return false
  }
  return false
}

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#696969',
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
      backgroundColor: '#666561',
      borderRadius: 20,
      padding: 10,
      margin: 2
    }
  });