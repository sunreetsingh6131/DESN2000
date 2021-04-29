import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TopUpPaymentHistory(props) {
    return (
        <View style={styles.border}>
            <View style={styles.topRow}>
                <View style={styles.topUpIcon}>
                <Text style={styles.topUp}>Top Up</Text>
                </View>
                <View style={styles.cardNameIcon}>
                <Text style={styles.cardName}>{props.cardName}</Text>
                </View>
                <View style={styles.dateTimeIcon}>
                <Text style={styles.dateTime}>{props.dateTime}</Text>
                </View>
            </View>
            <View style={styles.paymentInfoRow}>
                <Text style={styles.before}>Before</Text>
                <Text style={styles.beforeAmount}>{props.beforeAmount}</Text>
                <Text style={styles.amountToppedUp}>{props.amountToppedUp}</Text>
                <Text style={styles.after}>After</Text>
                <Text style={styles.afterAmount}>{props.afterAmount}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    border: {
        width: 400,
        height: 93,
        backgroundColor: "rgba(196,196,196,1)",
        marginTop: 10,
        marginLeft: 6
      },
    topRow: {
    height: 29,
    flexDirection: "row",
    marginRight: 1
    },
    topUpIcon: {
        width: 73,
        height: 29,
        backgroundColor: "rgba(65,65,65,1)"
      },
    topUp: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 2,
    marginLeft: 6,
    fontWeight: "bold"
    },
    cardNameIcon: {
        width: 91,
        height: 29,
        backgroundColor: "rgba(65,65,65,1)",
        marginLeft: 68
    },
    cardName: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 4,
        marginLeft: 21,
        textAlign: 'left',
        fontWeight: "bold"
    },
      dateTimeIcon: {
        width: 118,
        height: 16,
        backgroundColor: "rgba(65,65,65,1)",
        marginLeft: 50
    },
    dateTime: {
        color: "rgba(255,255,255,1)",
        fontSize: 10,
        fontWeight: "bold",
        marginTop: 2,
        marginLeft: 0
      },
    before: {
        top: 0,
        fontWeight: "bold",
        left: 0,
        position: "absolute",
        color: "#121212",
        fontSize: 20
    },
    beforeAmount: {
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 70
    },
    amountToppedUp: {
    color: "rgba(14,131,49,1)",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: 'italic',
    marginLeft: 20
    },
    after: {
    color: "#121212",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 39
    },
    afterAmount: {
    color: "#121212",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 23
    },
    paymentInfoRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16,
    marginRight: 30
    },
});
