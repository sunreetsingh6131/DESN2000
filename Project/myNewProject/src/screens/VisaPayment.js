import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import CredentialBox from '../components/CredentialBox';

export default function VisaPayment(props) {
  const [savePaymentDetailsModal, setsavePaymentDetailsModal] = useState(true); 
  const [successFulPaymentModal, setsuccessFulPaymentModal] = useState(false); 
  const [currCardName, setcurrCardName] = useState("");
  const [currCardNumber, setcurrCardNumber] = useState("");
  const [currcvv, setcurrcvv] = useState("");
  const [currExpiration, setcurrExpiration] = useState("");
  const [savedCardName, setsavedCardName] = useState("");
  const [savedCardNumber, setsavedCardNumber] = useState("");
  const [savedCardCVV, setsavedCardCVV] = useState("");
  const [savedCardExpiry, setsavedCardExpiry] = useState("");
  
  const successFullPaymentCheck = () => {
    if (currCardName === "" || currCardNumber === "" || currcvv === "" || currExpiration === "" || (buttonTenDollar.backgroundColor === "rgba(65,65,65,1)" && buttonTwentyDollar.backgroundColor === "rgba(65,65,65,1)" && buttonFiveDollar.backgroundColor === "rgba(65,65,65,1)" && buttonFiftyDollar.backgroundColor === "rgba(65,65,65,1)")) {
    } else {
      setsuccessFulPaymentModal(true);
    }
  }
  const doneSuccessfulPayment = () => {
    setsuccessFulPaymentModal(false); 
    props.navigation.navigate('OpalCards');
  }
  const prefillInformation = () => {
    setsavedCardName("G Redondi");
    setsavedCardNumber("4000251515241");
    setsavedCardCVV("123");
    setsavedCardExpiry("01/02");
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
  const checkCardNumber = (text) => {
    setcurrCardNumber(text); 
  }
  const checkCardName = (text) => {
    setcurrCardName(text); 
  }
  const checkCVV = (text) => {
    setcurrcvv(text); 
  }
  const checkExpiry = (text) => {
    setcurrExpiration(text); 
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
          <Text style={styles.enterDetailsText}>Enter Card{"\n"}Details:</Text>
          <Image
            source={require("../assets/visaLogo.jpg")}
            resizeMode="contain"
            style={styles.paypalLogo}
          ></Image>
        </View>
        <View style={styles.informationBorder}>
          <View style={styles.nameOnCardRow}>
            <Text style={styles.nameOnCard}>Name on Card:</Text>
            <CredentialBox width={189} height={44} placeholder="Name on Card" marginLeft={27} savedDetails = {savedCardName} checkFilled={checkCardName}></CredentialBox>
          </View>
          <View style={styles.cardNumberRow}>
            <Text style={styles.cardNumber}>Card Number:</Text>
            <CredentialBox width={189} height={44} placeholder="Card Number" marginLeft={36} savedDetails = {savedCardNumber} checkFilled={checkCardNumber}></CredentialBox>
          </View>
          <View style={styles.cvvRow}>
            <Text style={styles.cvv}>CVV:</Text>
            <CredentialBox width={79} height={44} placeholder="CVV" marginLeft={20} isPassword={true} savedDetails = {savedCardCVV} checkFilled={checkCVV}></CredentialBox>
            <Text style={styles.expiration}>Expiration:</Text>
            <CredentialBox width={79} height={44} placeholder="MM/YY" marginLeft={10} savedDetails = {savedCardExpiry} checkFilled={checkExpiry}></CredentialBox>
          </View>
          <View style={styles.saveDetailsRow}>
            <Text style={styles.saveDetailsText}>Save Details for next time?</Text>
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
    // backgroundColor: "#40484a"
    backgroundColor: '#696969'
  },
  buttonsRow: {
    flexDirection: "row"
  },
  informationBorder: {
    top: 236,
    left: 0,
    width: 375,
    height: 215,
    position: "absolute",
    marginLeft: 15,
    backgroundColor: 'white'
    // backgroundColor: "#dfeced"
  },
  done: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 30
  },
  doneButton2: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 91
  },
  nameOnCardRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 11,
    marginRight: 15
  },
  nameOnCard: {
    color: "#121212",
    fontSize: 20,
    marginLeft: -1,
    marginTop: 10
  },
  cardNumberRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 11,
    marginRight: 15
  },
  cvvRow: {
    height: 32,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 12,
    marginRight: 15
  },
  cvv: {
    color: "#121212",
    fontSize: 20,
    marginTop: 8
  },
  expiration: {
    color: "#121212",
    fontSize: 20,
    marginLeft: 19,
    marginTop: 8
  },
  saveDetailsRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 6,
    marginRight: 75
  },
  savedInformationText: {
    color: "rgba(255,255,255,1)",
    marginTop: 40,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  saveDetailsText: {
    color: "#121212",
    fontSize: 20
  },
  saveDetailsCheckbox: {
    width: 28,
    height: 24,
    backgroundColor: "#E6E6E6",
    marginLeft: 30
  },
  cardNumber: {
    color: "#121212",
    fontSize: 20,
    marginLeft: -1,
    marginTop: 10
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
    marginLeft: 30,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
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
  detailsContainer: {
    width: 375,
    height: 409,
    marginTop: 80
  },
  successfulTapOnText: {
    color: "rgba(255,255,255,1)",
    marginTop: 50,
    marginLeft: 49,
    fontSize: 20,
    fontWeight: "bold"
  },
  amountBorder: {
    width: 363,
    height: 99,
    marginLeft: 18,
    backgroundColor: 'white',
    // backgroundColor: "#dfeced",
    marginTop: 60,
  },
  amount: {
    color: "#121212",
    fontSize: 30,
    marginLeft: 125,
    fontWeight: "bold"
  },
  fiveDollarButton: {
    width: 61,
    height: 59,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20
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
  successfulTapOffNotification: {
    width: 375,
    height: 156,
    marginLeft: 1,
    marginTop: 350,
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
  optionsRow: {
    flexDirection: "row",
  },
  doneButton4: {
    width: 105,
    height: 31,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 45,
    marginLeft: 40
  },
  successfulTapOffNotificationBox: {
    top: 0,
    left: 43,
    width: 298,
    height: 156,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.89)"
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
