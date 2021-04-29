import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import CredentialBox from '../components/CredentialBox';

export default function PayPalPayment(props) {
  const [savePaymentDetailsModal, setsavePaymentDetailsModal] = useState(true); 
  const [savedUsername, setsavedUsername] = useState("");
  const [currUsername, setcurrUsername] = useState("");
  const [currPassword, setcurrPassword] = useState("");
  const [savedPassword, setsavedPassword] = useState("");
  const [successFulPaymentModal, setsuccessFulPaymentModal] = useState(false); 
  const [saveDetailsButton, setsaveDetailsButton] = useState({
    width: 28,
    height: 24,
    backgroundColor: "#E6E6E6",
    marginLeft: 29
  });
  const [buttonFiveDollar, setbuttonFiveDollar] = useState({
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20
  });
  const [buttonTenDollar, setbuttonTenDollar] = useState({
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginLeft: 27
  });
  const [buttonTwentyDollar, setbuttonTwentyDollar] = useState({
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginLeft: 24
  });
  const [buttonFiftyDollar, setbuttonFiftyDollar] = useState({
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginLeft: 28
  });
  const checkPassword = (text) => {
    setcurrPassword(text); 
  }
  const checkUsername = (text) => {
    setcurrUsername(text); 
  }
  const successFullPaymentCheck = () => {
    if (currUsername === "" || currPassword === "" || (buttonTenDollar.backgroundColor === "rgba(65,65,65,1)" && buttonTwentyDollar.backgroundColor === "rgba(65,65,65,1)" && buttonFiveDollar.backgroundColor === "rgba(65,65,65,1)" && buttonFiftyDollar.backgroundColor === "rgba(65,65,65,1)")) {
    
    } else {
      setsuccessFulPaymentModal(true);
    }
  }
  
  const doneSuccessfulPayment = () => {
    setsuccessFulPaymentModal(false); 
    props.navigation.navigate('OpalCards');
  }

  const prefillInformation = () => {
    setsavedUsername("Giuseppe@icloud.com");
    setsavedPassword("password");
    setsavePaymentDetailsModal(false);
  }
  const saveDetailsAdjust = () => {
    if (saveDetailsButton.backgroundColor === "#E6E6E6") {
      setsaveDetailsButton({
        width: 28,
        height: 24,
        backgroundColor: "#3382FF",
        marginLeft: 29
      });
    } else {
      setsaveDetailsButton({
        width: 28,
        height: 24,
        backgroundColor: "#E6E6E6",
        marginLeft: 29
      });
    }
  }
  const setAllBackToDefault = () => {
    setbuttonFiveDollar({
      width: 61,
      height: 59,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20
    });
    setbuttonTenDollar({
      width: 61,
      height: 59,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
      marginLeft: 27
    });
    setbuttonTwentyDollar({
      width: 61,
      height: 59,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
      marginLeft: 24
    });
    setbuttonFiftyDollar({
      width: 61,
      height: 59,
      backgroundColor: "rgba(65,65,65,1)",
      borderRadius: 20,
      marginLeft: 28
    });
  } 

  const updateButonFive = () => {
    setAllBackToDefault();
    setbuttonFiveDollar({
      width: 61,
      height: 59,
      backgroundColor: "#3382FF",
      borderRadius: 20
    });
  }
  const updateButonTen = () => {
    setAllBackToDefault();
    setbuttonTenDollar({
      width: 61,
      height: 59,
      backgroundColor: "#3382FF",
      borderRadius: 20,
      marginLeft: 27
    });
  }
  const updateButonTwenty = () => {
    setAllBackToDefault();
    setbuttonTwentyDollar({
      width: 61,
      height: 59,
      backgroundColor: "#3382FF",
      borderRadius: 20,
      marginLeft: 24
    });
  }
  const updateButonFifty = () => {
    setAllBackToDefault();
    setbuttonFiftyDollar({
      width: 61,
      height: 59,
      backgroundColor: "#3382FF",
      borderRadius: 20,
      marginLeft: 28
    });
  }


  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.enterDetailsTextContainer}>
          <Text style={styles.enterDetailsText}>Enter PayPal{"\n"}Details:</Text>
          <Image
            source={require("../assets/paypalLogo.png")}
            resizeMode="contain"
            style={styles.paypalLogo}
          ></Image>
        </View>
        <View style={styles.usernamePasswordBorder}>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>Username:</Text>
            <CredentialBox placeholder = "Username" height = {48} width = {210} marginLeft = {11} savedDetails = {savedUsername} checkFilled={checkUsername}></CredentialBox>
          </View>
          <View style={styles.passwordRow}>
            <Text style={styles.password}>Password:</Text>
            <CredentialBox placeholder = "Password" height = {48} width = {210} marginLeft = {15} savedDetails = {savedPassword} isPassword={true} checkFilled={checkPassword}></CredentialBox>
          </View>
          <View style={styles.saveDetailsRow}>
            <Text style={styles.saveDetails}>Save Details for next time?</Text>
            <TouchableOpacity 
            style={saveDetailsButton}
            onPress={() => saveDetailsAdjust()}>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={successFulPaymentModal}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.successfulTapOnText}>
            Payment Successful!
          </Text>
          <TouchableOpacity 
            style={styles.doneButton2}
            onPress={() => doneSuccessfulPayment()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={savePaymentDetailsModal}
      >
        <View style={styles.successfulTapOffNotification}>
        <View style={styles.successfulTapOffNotificationBox}>
          <Text style={styles.savedInformationText}>
            Would you like to use saved information for this payment type?
          </Text>
          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={styles.doneButton4}
              onPress={() => prefillInformation()}>
              <Text style={styles.yesNoStyle}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.doneButton3}
              onPress={() => setsavePaymentDetailsModal(false)}>
              <Text style={styles.yesNoStyle}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </Modal>
      <View style={styles.amountBorder}>
        <Text style={styles.amount}>Amount:</Text>
        <View style={styles.paymentAmountRow}>
          <TouchableOpacity 
              style={buttonFiveDollar}
              onPress={() => updateButonFive()}>
          <Text style={styles.fiveDollarText}>$5</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={buttonTenDollar}
              onPress={() => updateButonTen()}>
            <Text style={styles.tenDollarText}>$10</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={buttonTwentyDollar}
              onPress={() => updateButonTwenty()}>
            <Text style={styles.twentyDollarText}>$20</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={buttonFiftyDollar}
              onPress={() => updateButonFifty()}>
            <Text style={styles.fiftyDollarText}>$50</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity 
              style={styles.payButton}
              onPress={() => successFullPaymentCheck()}>
            <Text style={styles.payText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => props.navigation.navigate('PaymentOption')}>
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
    // backgroundColor: "#40484a"
  },
  buttonsRow: {
    flexDirection: "row"
  },
  doneButton2: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 91
  },
  doneButton4: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 45,
    marginLeft: 40
  },
  yesNoStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 40
  },
  doneButton3: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 45,
    marginLeft: 10
  },
  enterDetailsText: {
    top: 0,
    position: "absolute",
    // color: "#37a3c4",
    color: 'white',
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    left: 0,
    marginLeft: 14,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  successfulTapOnText: {
    color: "rgba(255,255,255,1)",
    marginTop: 50,
    marginLeft: 49,
    fontSize: 20,
    fontWeight: "bold"
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
  paypalLogo: {
    top: 69,
    left: 4,
    width: 200,
    height: 200,
    marginLeft: 15,
    position: "absolute"
  },
  enterDetailsTextContainer: {
    top: 0,
    left: 84,
    width: 250,
    height: 269,
    position: "absolute"
  },
  saveDetailsRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 8,
    marginRight: 74
  },
  usernamePasswordBorder: {
    top: 243,
    left: 0,
    width: 375,
    height: 180,
    marginLeft: 15,
    position: "absolute",
    // backgroundColor: "#dfeced"
    backgroundColor: 'white'
  },
  username: {
    color: "#121212",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 6
  },
  usernameRow: {
    height: 48,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 2,
    marginRight: 14
  },
  saveDetails: {
    color: "#121212",
    fontWeight: "bold",
    fontSize: 20
  },
  password: {
    color: "#121212",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 6
  },
  passwordRow: {
    height: 48,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 2,
    marginRight: 14
  },
  optionsRow: {
    flexDirection: "row",
  },
  detailsContainer: {
    width: 375,
    height: 409,
    marginTop: 80
  },
  amountBorder: {
    width: 363,
    height: 99,
    marginLeft: 18,
    // backgroundColor: "#dfeced",
    backgroundColor: 'white',
    marginTop: 35,
  },
  amount: {
    color: "#121212",
    fontSize: 30,
    marginLeft: 125,
    fontWeight: "bold"
  },
  
  done: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 30
  },
  fiveDollarText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 18,
    fontWeight: "bold",
    marginLeft: 19
  },
  tenDollarButton: {
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginLeft: 27
  },
  tenDollarText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 18,
    marginLeft: 14
  },
  twentyDollarButton: {
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginLeft: 24
  },
  twentyDollarText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 18,
    marginLeft: 13
  },
  fiftyDollarButton: {
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginLeft: 28
  },
  fiftyDollarText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 18,
    marginLeft: 13
  },
  paymentAmountRow: {
    height: 59,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20
  },
  saveDetailsCheckBox: {
    width: 28,
    height: 24,
    backgroundColor: "#E6E6E6",
    marginLeft: 29
  },
  savedInformationText: {
    color: "rgba(255,255,255,1)",
    marginTop: 40,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  payButton: {
    width: 123,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 20,
    marginLeft: "13%",
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  payText: {
    // color: "#37a3c4",
    color: 'white',
    fontSize: 20,
    marginTop: 18,
    marginLeft: 44,
    fontWeight: "bold"
  },
  backButton: {
    width: 123,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 20,
    marginLeft: "10%",
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  backButtonText: {
    // color: "#37a3c4",
    color: 'white',
    fontSize: 20,
    marginTop: 18,
    marginLeft: 37,
    fontWeight: "bold"
  }
});
