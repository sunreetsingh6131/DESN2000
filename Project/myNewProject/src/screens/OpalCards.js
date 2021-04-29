import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Modal, TouchableHighlight } from 'react-native';  


export default function OpalCards({ navigation }) {
    const [opalBalance1, setopalBalance1] = useState((Math.round(10 * 100) / 100).toFixed(2)); 
    const [modalTapOff1, setmodalTapOff1] = useState(false); 
    const [modalTapOn1, setmodalTapOn1] = useState(false); 
    const [tapOnOffText1, settapOnOffText1] = useState("On"); 
    const [insufficientFundsPopUp1, setinsufficientFundsPopUp1] = useState(false); 
    const [topUpButtonStyle1, settopUpButtonStyle1] = useState({
      width: 119,
      height: 41,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
      marginTop: 1,
      marginLeft: 128,
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.00,
    })
    const [opalBalance2, setopalBalance2] = useState((Math.round(8 * 100) / 100).toFixed(2)); 
    const [modalTapOff2, setmodalTapOff2] = useState(false); 
    const [modalTapOn2, setmodalTapOn2] = useState(false); 
    const [tapOnOffText2, settapOnOffText2] = useState("On"); 
    const [topUpButtonStyle2, settopUpButtonStyle2] = useState({
      width: 119,
      height: 41,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
      marginTop: 1,
      marginLeft: 128,
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.00,
    })
    const [opalBalance3, setopalBalance3] = useState((Math.round(5 * 100) / 100).toFixed(2)); 
    const [modalTapOff3, setmodalTapOff3] = useState(false); 
    const [modalTapOn3, setmodalTapOn3] = useState(false); 
    const [tapOnOffText3, settapOnOffText3] = useState("On"); 
    const [topUpButtonStyle3, settopUpButtonStyle3] = useState({
      width: 119,
      height: 41,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
      marginTop: 1,
      marginLeft: 128,
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.00,
    })
    const doneButtonSuccessFullTapOn1 = () => {
      setmodalTapOn1(false); 
    }
    const doneButtonSuccessFullTapOff1 = () => {
      setmodalTapOff1(false);
      setopalBalance1((Math.round((opalBalance1 - 1.2) * 100) / 100).toFixed(2));
      settapOnOffText1("On");
      settopUpButtonStyle1({
        width: 119,
        height: 41,
        backgroundColor: "rgba(65,65,65,1)",
        borderRadius: 20,
        marginTop: 1,
        marginLeft: 128,
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.5,
          shadowRadius: 4.00,
      })
    }
    const doneInsufficientFundsPopUp1 = () => {
      setinsufficientFundsPopUp1("false");
    }
    const updateButon1 = () => {
      // we know that it has already been pressed, need to go back to normal colour
      if (topUpButtonStyle1.backgroundColor === "#3382FF"){
        setmodalTapOff1(true);
        settapOnOffText1("On");
        
        settopUpButtonStyle1({
          width: 119,
          height: 41,
          backgroundColor: "rgba(65,65,65,1)",
          borderRadius: 20,
          marginTop: 1,
          marginLeft: 128,
          shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.00,
        })
      } 
      // we know that no button has been pressed
      else if (topUpButtonStyle1.backgroundColor === "rgba(65,65,65,1)" && topUpButtonStyle2.backgroundColor === "rgba(65,65,65,1)" && topUpButtonStyle3.backgroundColor === "rgba(65,65,65,1)"){
        if (opalBalance1 < 1.20) {
          console.log("hello");
          setinsufficientFundsPopUp1(true); 
        } else {
          settapOnOffText1("Off");
          setmodalTapOn1(true);
          settopUpButtonStyle1({
          width: 119,
          height: 41,
          backgroundColor: "#3382FF",
          borderRadius: 20,
          marginTop: 1,
          marginLeft: 128,
          shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.00,
        })
        }
        
      }
    };
    //button 2
    const doneButtonSuccessFullTapOn2 = () => {
      setmodalTapOn2(false); 
    }
    const doneButtonSuccessFullTapOff2 = () => {
      setmodalTapOff2(false);
      setopalBalance2((Math.round((opalBalance2 - 1.2) * 100) / 100).toFixed(2));
      settapOnOffText2("On");
      settopUpButtonStyle1({
        width: 119,
        height: 41,
        backgroundColor: "rgba(65,65,65,1)",
        borderRadius: 20,
        marginTop: 1,
        marginLeft: 128,
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.5,
          shadowRadius: 4.00,
      })
    }
    const updateButon2 = () => {
      // we know that it has already been pressed, need to go back to normal colour
      if (topUpButtonStyle2.backgroundColor === "#3382FF"){
        setmodalTapOff2(true);
        settapOnOffText2("On");
        settopUpButtonStyle2({
          width: 119,
          height: 41,
          backgroundColor: "rgba(65,65,65,1)",
          borderRadius: 20,
          marginTop: 1,
          marginLeft: 128,
          shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.00,
        })
      } 
      // we know that no button has been pressed
      else if (topUpButtonStyle1.backgroundColor === "rgba(65,65,65,1)" && topUpButtonStyle2.backgroundColor === "rgba(65,65,65,1)" && topUpButtonStyle3.backgroundColor === "rgba(65,65,65,1)"){
        if (opalBalance2 < 1.20) {
          setinsufficientFundsPopUp1(true); 
        } else {
          settapOnOffText2("Off");
          setmodalTapOn2(true);
          settopUpButtonStyle2({
            width: 119,
            height: 41,
            backgroundColor: "#3382FF",
            borderRadius: 20,
            marginTop: 1,
            marginLeft: 128,
            shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.5,
              shadowRadius: 4.00,
          })
        }
      }
    };
    //button 3
    const doneButtonSuccessFullTapOn3 = () => {
      setmodalTapOn3(false); 
    }
    const doneButtonSuccessFullTapOff3 = () => {
      setmodalTapOff3(false);
      setopalBalance3((Math.round((opalBalance3 - 1.2) * 100) / 100).toFixed(2));
      settapOnOffText3("On");
      settopUpButtonStyle3({
        width: 119,
        height: 41,
        backgroundColor: "rgba(65,65,65,1)",
        borderRadius: 20,
        marginTop: 1,
        marginLeft: 128,
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.5,
          shadowRadius: 4.00,
      })
    }
    const updateButon3 = () => {
      // we know that it has already been pressed, need to go back to normal colour
      if (topUpButtonStyle3.backgroundColor === "#3382FF"){
        setmodalTapOff3(true);
        settapOnOffText3("On");
        settopUpButtonStyle3({
          width: 119,
          height: 41,
          backgroundColor: "rgba(65,65,65,1)",
          borderRadius: 20,
          marginTop: 1,
          marginLeft: 128,
          shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.00,
        })
      } 
      // we know that no button has been pressed
      else if (topUpButtonStyle1.backgroundColor === "rgba(65,65,65,1)" && topUpButtonStyle2.backgroundColor === "rgba(65,65,65,1)" && topUpButtonStyle3.backgroundColor === "rgba(65,65,65,1)"){
        if (opalBalance3 < 1.20) {
          setinsufficientFundsPopUp1(true); 
        } else {
          settapOnOffText3("Off");
          setmodalTapOn3(true);
          settopUpButtonStyle3({
            width: 119,
            height: 41,
            backgroundColor: "#3382FF",
            borderRadius: 20,
            marginTop: 1,
            marginLeft: 128,
            shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.5,
              shadowRadius: 4.00,
          })
        }
      }
    };
    return (
    <View style={styles.container}>
      <Text style={styles.opalCards}>Opal Cards</Text>
      <View style={styles.border}>
        <View style={styles.infoRow}>
          <Image
            source={require("../assets/opal-school-card.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.school}>Work</Text>
          <Text style={styles.balance}>${opalBalance1}</Text>
          <TouchableOpacity 
          style={styles.topUpButton}
          onPress={() => navigation.navigate('PaymentOption')}>
            <Text style={styles.topUp}>Top Up</Text>
            
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={topUpButtonStyle1}
          onPress={() => updateButon1()}
        >
          <Text style={styles.tapOn}>Tap {tapOnOffText1}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOff1}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <View style={styles.successfulTapOffRow}>
            <Text style={styles.successfulTapOff}>Successful Tap Off!</Text>
          </View>
          <Text style={styles.successfulTapOffNotificationTripCost}>Trip Cost: $1.20</Text>
          <View style={styles.tripDetailsRow}>
            <Text style={styles.from}>Pyrmont</Text>
            <Text style={styles.toText}>to</Text>
            <Text style={styles.dest}>Central</Text>
          </View>
          <Text style={styles.newBalance}>
            New Balance of card Work: ${(Math.round((opalBalance1 - 1.2) * 100) / 100).toFixed(2)}
          </Text>
          <TouchableOpacity 
            style={styles.doneButton}
            onPress={() => doneButtonSuccessFullTapOff1()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOn1}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.successfulTapOnText}>
            Successful Tap On!
          </Text>
          <TouchableOpacity 
            style={styles.doneButton2}
            onPress={() => doneButtonSuccessFullTapOn1()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOn1}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.successfulTapOnText}>
            Successful Tap On!
          </Text>
          <TouchableOpacity 
            style={styles.doneButton2}
            onPress={() => doneButtonSuccessFullTapOn1()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={insufficientFundsPopUp1}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.successfulTapOnText}>
            Insufficient Funds
          </Text>
          <TouchableOpacity 
            style={styles.doneButton2}
            onPress={() => doneInsufficientFundsPopUp1()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOff2}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <View style={styles.successfulTapOffRow}>
            <Text style={styles.successfulTapOff}>Successful Tap Off!</Text>
          </View>
          <Text style={styles.successfulTapOffNotificationTripCost}>Trip Cost: $1.20</Text>
          <View style={styles.tripDetailsRow}>
            <Text style={styles.from}>Pyrmont</Text>
            <Text style={styles.toText}>to</Text>
            <Text style={styles.dest}>Central</Text>
          </View>
          <Text style={styles.newBalance}>
            New Balance of card Fun: ${(Math.round((opalBalance2 - 1.2) * 100) / 100).toFixed(2)}
          </Text>
          <TouchableOpacity 
            style={styles.doneButton}
            onPress={() => doneButtonSuccessFullTapOff2()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOn2}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.successfulTapOnText}>
            Successful Tap On!
          </Text>
          <TouchableOpacity 
            style={styles.doneButton2}
            onPress={() => doneButtonSuccessFullTapOn2()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOff3}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <View style={styles.successfulTapOffRow}>
            <Text style={styles.successfulTapOff}>Successful Tap Off!</Text>
          </View>
          <Text style={styles.successfulTapOffNotificationTripCost}>Trip Cost: $1.20</Text>
          <View style={styles.tripDetailsRow}>
            <Text style={styles.from}>Pyrmont</Text>
            <Text style={styles.toText}>to</Text>
            <Text style={styles.dest}>Central</Text>
          </View>
          <Text style={styles.newBalance}>
            New Balance of card Uni: ${(Math.round((opalBalance3 - 1.2) * 100) / 100).toFixed(2)}
          </Text>
          <TouchableOpacity 
            style={styles.doneButton}
            onPress={() => doneButtonSuccessFullTapOff3()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOn3}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.successfulTapOnText}>
            Successful Tap On!
          </Text>
          <TouchableOpacity 
            style={styles.doneButton2}
            onPress={() => doneButtonSuccessFullTapOn3()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>

      <View style={styles.border}>
        <View style={styles.infoRow}>
          <Image
            source={require("../assets/opal-school-card.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.school}>Play</Text>
          <Text style={styles.balance}>${opalBalance2}</Text>
          <TouchableOpacity 
          style={styles.topUpButton}
          onPress={() => navigation.navigate('PaymentOption')}>
            <Text style={styles.topUp}>Top Up</Text>
            
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={topUpButtonStyle2}
          onPress={() => updateButon2()}
        >
          <Text style={styles.tapOn}>Tap {tapOnOffText2}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOff2}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <View style={styles.successfulTapOffRow}>
            <Text style={styles.successfulTapOff}>Successful Tap Off!</Text>
          </View>
          <Text style={styles.successfulTapOffNotificationTripCost}>Trip Cost: $1.20</Text>
          <View style={styles.tripDetailsRow}>
            <Text style={styles.from}>Pyrmont</Text>
            <Text style={styles.toText}>to</Text>
            <Text style={styles.dest}>Central</Text>
          </View>
          <Text style={styles.newBalance}>
            New Balance of card Work: $1.20
          </Text>
          <TouchableOpacity 
            style={styles.doneButton}
            onPress={() => doneButtonSuccessFullTapOff2()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTapOn2}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.successfulTapOnText}>
            Successful Tap On!
          </Text>
          <TouchableOpacity 
            style={styles.doneButton2}
            onPress={() => doneButtonSuccessFullTapOn2()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>

      <View style={styles.border}>
        <View style={styles.infoRow}>
          <Image
            source={require("../assets/opal-school-card.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.school}>Uni</Text>
          <Text style={styles.balance}>${opalBalance3}</Text>
          <TouchableOpacity 
          style={styles.topUpButton}
          onPress={() => navigation.navigate('PaymentOption')}>
            <Text style={styles.topUp}>Top Up</Text>
            
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={topUpButtonStyle3}
          onPress={() => updateButon3()}
        >
          <Text style={styles.tapOn}>Tap {tapOnOffText3}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity 
          style={styles.paymentHistoryButton}
          onPress={() => navigation.navigate('PaymentHistory')}>
            <Text style={styles.paymentHistory}>Payment History</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
    ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969'
    //backgroundColor: '#40484a',
  },
  buttonsRow: {
    flexDirection: "row"
  },
  doneButton: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 3,
    marginLeft: 91
  },

  doneButton2: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 91
  },
  done: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 30
  },
  successfulTapOffNotification: {
    width: 375,
    height: 156,
    marginLeft: 1,
    marginTop: 350,
  },
  successfulTapOffNotificationBox: {
    top: 0,
    left: 43,
    width: 298,
    height: 156,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.89)"
  },
  toText: {
    color: "rgba(255,255,255,1)",
    marginLeft: 58
  },
  newBalance: {
    color: "rgba(255,255,255,1)",
    marginTop: 20,
    marginLeft: 43
  },
  successfulTapOnText: {
    color: "rgba(255,255,255,1)",
    marginTop: 50,
    marginLeft: 49,
    fontSize: 20,
    fontWeight: "bold"
  },
  dest: {
    color: "rgba(255,255,255,1)",
    marginLeft: 78
  },
  successfulTapOffRow: {
    width: 175,
    height: 24,
    marginTop: 13,
    marginLeft: 62
  },
  loremIpsum2: {
    top: 0,
    left: 82,
    position: "absolute",
    color: "rgba(255,255,255,1)"
  },
  successfulTapOff: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  successfulTapOffNotificationTripCost: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginLeft: 95
  },
  tripDetailsRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 29,
    marginRight: 21
  },
  from: {
    color: "rgba(255,255,255,1)",
    marginTop: 1
  },
  border: {
    width: "100%",
    height: 143,
    // backgroundColor: "#dfeced",
    backgroundColor: 'white',
    marginTop: 30
  },
  image: {
    width: 50,
    height: 58
  },
  school: {
    color: "#121212",
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 26,
    marginTop: 17
  },
  balance: {
    color: "#121212",
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 17
  },
  topUpButton: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginLeft: 40,
    marginTop: 13,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  topUp: {
    //color: "#37a3c4",
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    marginLeft: 21,

  },
  infoRow: {
    height: 58,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 19
  },
  tapOnButton: {
    width: 119,
    height: 41,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 1,
    marginLeft: 128,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  tapOn: {
    color: 'white',
    //color: "#37a3c4",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 9,
    marginLeft: 29,
  },
  opalCards: {
  //color: "#37a3c4",
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    marginLeft: "27%",
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
    shadowOpacity: 0.5,
    shadowRadius: 4.00,

  },
  paymentHistoryButton: {
    width: 175,
    height: 45,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 75,
    marginLeft: 25
  },
  paymentHistory: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 12
  },
  backButton: {
    width: 175,
    height: 45,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 75,
    marginLeft: 10
  },
  backButtonText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 60
  }
  });