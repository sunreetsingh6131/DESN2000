import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function PaymentOption(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.selectPaymentMethodText}>Select Payment{"\n"} Method:</Text>
      <View style={styles.paypalRow}>
        <Image
          source={require("../assets/paypalLogo.png")}
          resizeMode="contain"
          style={{...styles.paypalLogo, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.00,}}
        ></Image>
        <TouchableOpacity 
          style={styles.payWithPayPalButton}
          onPress={() => props.navigation.navigate('PayPalPayment')}>
            <Text style={styles.payWithPayPal}>Pay with{"\n"} PayPal</Text>
            
        </TouchableOpacity>
      </View>
      <View style={styles.visaRow}>
        <Image
          source={require("../assets/visaLogo.jpg")}
          resizeMode="contain"
          style={{...styles.visaLogo, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.00,}}
        ></Image>
        <TouchableOpacity 
          style={styles.payWithVisaButton}
          onPress={() => props.navigation.navigate('VisaPayment')}>
            <Text style={styles.payWithVisa}>Pay with{"\n"}Visa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mastercardRow}>
        <Image
          source={require("../assets/mastercardLogo.png")}
          resizeMode="contain"
          style={{...styles.mastercardLogo, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.00,}}
        ></Image>
        <TouchableOpacity 
          style={styles.payWithMasterCardButton}
          onPress={() => props.navigation.navigate('MasterCardPayment')}>
            <Text style={styles.payWithMasterCard}>Pay with{"\n"}MasterCard</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.paymentHistoryButton}
        onPress={() => props.navigation.navigate('OpalCards')}>
          <Text style={styles.paymentHistoryText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#40484a"
    backgroundColor: '#696969'
  },
  paymentHistoryButton: {
    width: 175,
    height: 50,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    marginTop: 75,
    marginLeft: 101
  },
  paymentHistoryText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 62
  },
  selectPaymentMethodText: {
    // color: "#37a3c4",
    color: 'white',
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "center",
    marginTop: 66,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.00,
  },
  paypalLogo: {
    width: 188,
    height: 180
  },
  payWithPayPalButton: {
    width: 143,
    height: 55,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    fontStyle: "normal",
    fontWeight: "700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 17,
    marginTop: 62,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  payWithPayPal: {
    // color: "#37a3c4",
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
  },
  paypalRow: {
    height: 180,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 30
  },
  visaLogo: {
    width: 194,
    height: 146
  },
  payWithVisaButton: {
    width: 143,
    height: 55,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    fontStyle: "normal",
    fontWeight: "700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 14,
    marginTop: 45,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  payWithVisa: {
    color: 'white',
    // color: "#37a3c4",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 4,
  },
  visaRow: {
    height: 146,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 4,
    marginRight: 20,
    marginLeft: 30
  },
  mastercardLogo: {
    width: 200,
    height: 181
  },
  payWithMasterCardButton: {
    width: 143,
    height: 55,
    backgroundColor: "rgba(65,65,65,1)",
    borderRadius: 20,
    fontStyle: "normal",
    fontWeight: "700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 11,
    marginTop: 63,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,
  },
  payWithMasterCard: {
    color: 'white',
    // color: "#37a3c4",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 3,
  },
  mastercardRow: {
    height: 181,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 1,
    marginRight: 20,
    marginLeft: 30
  }
});