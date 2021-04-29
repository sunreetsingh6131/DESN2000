import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import TopUpPaymentHistory from '../components/TopUpPaymentHistory';
import TripPaymentHistory from '../components/TripPaymentHistory';

export default function PaymentHistory(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paymentHistory}>Payment{"\n"}History</Text>
      <Text style={styles.mostRecent}>Most Recent:</Text>
      <TopUpPaymentHistory
        cardName = "Work"
        beforeAmount = "$0.68"
        afterAmount = "$5.68"
        dateTime = "27/07/2020 at 1:03PM"
        amountToppedUp = "+$5"
      ></TopUpPaymentHistory>
      <TripPaymentHistory
        cardName = "Work"
        tripFrom = "Pyrmont"
        tripTo = "Central"
        amountBefore = "$1.88"
        amountAfter = "$0.68"
        dateTime = "26/07/2020 at 5:03PM"
        amountCost = "-$1.20"
      ></TripPaymentHistory>
      <TripPaymentHistory
        cardName = "Work"
        tripFrom = "Central"
        tripTo = "Pyrmont"
        amountBefore = "$3.08"
        amountAfter = "$1.88"
        dateTime = "26/07/2020 at 8:03AM"
        amountCost = "-$1.20"
      ></TripPaymentHistory>
      <TopUpPaymentHistory
        cardName = "Fun"
        beforeAmount = "$0.67"
        afterAmount = "$10.67"
        dateTime = "25/07/2020 at 9:03PM"
        amountToppedUp = "+$10"
      ></TopUpPaymentHistory>
      <TripPaymentHistory
        cardName = "Fun"
        tripFrom = "ICC"
        tripTo = "Central"
        amountBefore = "$3.07"
        amountAfter = "$0.67"
        dateTime = "25/07/2020 at 7:03PM"
        amountCost = "-$2.40"
      ></TripPaymentHistory>
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
    backgroundColor: "rgba(105,105,105,1)"
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
  paymentHistory: {
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 15
  },
  mostRecent: {
    top: 0,
    left: 0,
    marginTop: 170,
    position: "absolute",
    fontWeight: "bold",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
});


