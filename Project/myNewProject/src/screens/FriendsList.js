import React, { Component } from 'react';
// import AddNewContact from './components/AddNewContact';
import { StyleSheet, Text, View, Button,TextInput, Modal, TouchableHighlight,TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import ViewLocationModal from '../components/ViewLocationModal'
import ViewEditFriendshipModal from '../components/ViewEditFriendshipModal'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Body,
  Header,
  Left,
  Icon,
  Right,
  ActionSheet,
} from 'native-base';

export default class FriendsList extends Component{

  constructor(props) {
    super(props)
    this.state={
      allcontacts:[
        { email:'sunreetsingh6131@gmail.com',
          phone:'0406892896',
          name:'Sunreet Singh'
        },
        { email:'JohnCitizen123@gmail.com',
          phone:'0412345678',
          name:'John Citizen'
        },
        { email:'Achilles007@gmail.com',
          phone:'0414123123',
          name:'Achilles'
        },
        { email:'Guiseppe111@gmail.com',
          phone:'0418888171',
          name:'Guiseppe'
        },
        { email:'Timthacker@gmail.com',
          phone:'0409012992',
          name:'Timothy'
        }
      ],
      modalLocationVisible: false,
      modalFriendshipVisible: false,
      selectedItem: null
    },
    this.updateContacts = this.updateContacts.bind(this)
  }

  openModal = () => this.setState({ modalLocationVisible: true });
  closeModal = () => this.setState({ modalLocationVisible: false });

  // openFriendshipModal = () => this.setState({ modalFriendshipVisible: true });
  // closeFriendshipModal = () => this.setState({ modalFriendshipVisible: false });

  updateContacts(name, email, phone){
    this.setState({
      allcontacts: [
        ...this.state.allcontacts,
        { email:[email],
          phone:[phone],
          name:[name]
        }
        ]
    })
  }

  removeContacts(input){
    console.log(input.phone)
    var array = [...this.state.allcontacts];
    var index = array.findIndex(function(item) {return item.phone == input.phone});
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({allcontacts: array});
    }
    this.closeItemModal(input)
  }

  itemOpen(item) {
    this.setState({
      modalFriendshipVisible: !this.state.modalFriendshipVisible,
      selectedItem: item
    });
  }

  closeItemModal(item) {
    this.setState({
      modalFriendshipVisible: false,
      selectedItem: null
    });
  }

  // renderItem=({item})=>(
  //   <View style={{ minHeight: 60, padding: 6, borderBottomWidth: 1.0, borderBottomColor: 'white'}}>
  //     <View style={{flexDirection:'row'}}>
  //       <Text style={{ width: 250 ,color: 'white', fontWeight: 'bold', fontSize: 34, /*fontFamily: 'Avenir',*/ shadowColor: "#000",
  //           shadowOffset: {
  //             width: 0,
  //             height: 2
  //           },
  //           shadowOpacity: 0.5,
  //           shadowRadius: 4.00, }}>
  //         {item.name}
  //       </Text>
  //       <TouchableOpacity onPress={this.openModal} style={{paddingTop: 5}}>
  //         <Text style={{ fontSize: 17, color: '#37a3c4', shadowColor: "#000",
  //           shadowOffset: {
  //             width: 0,
  //             height: 2
  //           },
  //           shadowOpacity: 0.5,
  //           shadowRadius: 4.00,}}>
  //         View Location
  //         </Text>
  //       </TouchableOpacity>
  //       <ViewLocationModal visibility={this.state.modalLocationVisible} closeModal={this.closeModal} />
  //     </View>
  //     <View style={{flexDirection:'row'}}>
  //       <Text style={{ width: 250, color: 'white', fontWeight: 'bold', fontSize: 18 /*fontFamily: 'Avenir'*/ }}>
  //         {item.phone}
  //       </Text>
  //       <TouchableOpacity onPress={()=>this.itemOpen(item)}>
  //         <Text style={{ fontSize: 17, color: '#37a3c4', shadowColor: "#000",
  //           shadowOffset: {
  //             width: 0,
  //             height: 2
  //           },
  //           shadowOpacity: 0.5,
  //           shadowRadius: 4.00,}}>Edit Friendship</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );

//visibility={this.state.modalFriendshipVisible} closeModal={this.closeFriendshipModal}
  getSearchResult=(input)=>{
    const filteredContacts = this.state.allcontacts.filter(contact => {
      let contactLowercase = (contact.name).toLowerCase();

      let searchTermLowercase = input.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ allcontacts: filteredContacts });
  }

  render(){
    return(
      <View style={{flex:1}}>
        <View><SafeAreaView style={{ backgroundColor: '#696969' }} /></View>
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
            <Icon size={30} style={{marginLeft:3, color:'#3382FF'}} name="arrow-back"/>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#dddddd"
          style={{
            backgroundColor: '#2f363c',
            height: 50,
            /*fontFamily: 'Avenir',*/
            fontSize: 18,
            padding: 10,
            color: 'white',
          }}
          onChangeText={(value)=> this.getSearchResult(value)}
        />
        
        <View style={styles.contentContainer}>
          <FlatList
            data={this.state.allcontacts}
            renderItem={({item}) => {
              return(
                <View style={{ minHeight: 60, padding: 6, borderBottomWidth: 1.0, borderBottomColor: 'white'}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{ width: 250 ,color: 'white', fontWeight: 'bold', fontSize: 34, /*fontFamily: 'Avenir',*/ shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4.00, }}>
                      {item.name}
                    </Text>
                    <TouchableOpacity onPress={this.openModal} style={{...styles.backgroundOfButton1, paddingTop: 5}}>
                      <Text style={{ fontSize: 17, color: 'white', shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4.00,}}>  View Location</Text>
                    </TouchableOpacity>
                    <ViewLocationModal visibility={this.state.modalLocationVisible} closeModal={this.closeModal} />
                  </View>
                  <View style={{marginTop:2,flexDirection:'row'}}>
                    <Text style={{ width: 250, color: 'white', fontWeight: 'bold', fontSize: 18 /*fontFamily: 'Avenir'*/ }}>
                      {item.phone}
                    </Text>
                    <TouchableOpacity style={styles.backgroundOfButton2} onPress={()=>this.itemOpen(item)}>
                      <Text style={{marginTop:4, fontSize: 17, color: 'white', shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4.00,}}>  Edit Friendship</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            
            keyExtractor={(item, index)=>index.toString()}
            style={{
              width: '100%',
            }}
          />
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalFriendshipVisible}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{flexDirection:'row'}}>
                <Text style={{/*fontFamily:'Avenir',*/ fontWeight:'bold',fontSize:20}}>Do you wish to remove friend?</Text>
              </View>
              <TouchableHighlight
                    style={styles.openButton}
                    onPress={()=>{const selectItem = this.state.selectedItem;this.removeContacts(selectItem)}}
              >
                <Text style={{...styles.textStyle, color:'#eb2d23'}}>YES, REMOVE FRIEND</Text>
              </TouchableHighlight>
              <TouchableHighlight
                    style={styles.openButton}
                    onPress={()=>{const selectItem = this.state.selectedItem;this.closeItemModal(selectItem)}}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
          </Modal>
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddFriendScreen')} style={{...styles.backgroundOfButton1, height: 45, paddingTop: 5}}>
            <Text style={{ marginTop: 3, fontSize: 20, color: 'white', shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.5,
              shadowRadius: 4.00,}}> Add Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateTrip')} style={{...styles.backgroundOfButton1, height: 45, paddingTop: 5}}>
            <Text style={{ marginTop: 3, fontSize: 20, color: 'white', shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.5,
              shadowRadius: 4.00,}}>  Create Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#696969',
    },

    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#696969'
    },
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
      // backgroundColor: "#dfeced",
      backgroundColor:'white',
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
    },
    backgroundOfButton1: {
      width: 120,
      height:35,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
    },
    backgroundOfButton2: {
      width: 130,
      height: 32,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
    }
  });

//37a3c4 striking blue
//40484a background blue

//        <ViewEditFriendshipModal visibility={this.state.modalFriendshipVisible} closeModal={this.closeFriendshipModal} remove={()=>this.removeContacts(item.id)} item={item}/>

//remove={(id)=>this.removeContacts(id)} item={item}
//remove={(p)=>this.removeContacts(p)}
//ListEmptyComponent={() => (
//                 <View
//                   style={{
//                     flex: 1,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginTop: 50
//                   }}
//                 >
//                   <Text style={{ color: '#bad555' }}>No Contacts Found</Text>
//<!--  <Header headerText="FriendsList"/> -->

// export default function FriendsList(){
//   return(
//     <View>
//       <Text>Opal Cards</Text>
//     </View>
// );
// }