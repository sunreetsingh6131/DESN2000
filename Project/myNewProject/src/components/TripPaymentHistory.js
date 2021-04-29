import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TripPaymentHistory(props) {
    return (
        <View style={styles.border}>
            <View style={styles.rowOfColumns}>
                <View style={styles.tripIcon}>
                    <Text style={styles.trip}>Trip</Text>
                </View>
                <View style={styles.cardNameIcon}>
                    <Text style={styles.cardName}>{props.cardName}</Text>
                </View>
                <View style={styles.dateTimeIcon}>
                    <Text style={styles.dateTime}>{props.dateTime}</Text>
                </View>
            </View>
            <View style={styles.bottomRow}>
                <Text style={styles.before}>Before</Text>
                <View style={styles.tripBeforeColumn}>
                    <Text style={styles.tripFrom}>{props.tripFrom}</Text>
                    <Text style={styles.amountBefore}>{props.amountBefore}</Text>
                </View>
                <View style={styles.toColumn}>
                    <Text style={styles.to}>to</Text>
                    <Text style={styles.tripCostAmount}>{props.amountCost}</Text>
                </View>
                <View style={styles.tripDestinationColumn}>
                    <Text style={styles.tripDestination}>{props.tripTo}</Text>
                    <Text style={styles.after}>After</Text>
                </View>
                <Text style={styles.amountAfter}>{props.amountAfter}</Text>
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
    rowOfColumns: {
        height: 29,
        flexDirection: "row",
        marginLeft: 1
    },
    tripIcon: {
        width: 73,
        height: 29,
        backgroundColor: "rgba(65,65,65,1)",
        marginLeft: -1
    },   
    trip: {
        fontWeight: "bold",
        color: "rgba(255,255,255,1)",
        fontSize: 20,
        marginTop: 1,
        marginLeft: 19
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
        marginTop: 2,
        marginLeft: 0,
        fontWeight: "bold"
    },
    bottomRow: {
        height: 49,
        flexDirection: "row",
        marginTop: 4,
        marginLeft: 14,
        marginRight: 26
    },
    tripBeforeColumn: {
        width: 128,
        height: 48,
        marginTop: 1
    },
    tripFrom: {
        top: 0,
        left: 58,
        position: "absolute",
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold"
    },
    before: {
        top: 23,
        left: 0,
        position: "absolute",
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold"
    },
    amountBefore: {
        top: 24,
        left: 76,
        position: "absolute",
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold"
    },
    toColumn: {
        width: 70,
        height: 47,
        marginLeft: 20,
        marginTop: 1
    },
    to: {
        top: 0,
        left: 8,
        position: "absolute",
        color: "#121212",
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: "bold"
    },
    tripCostAmount: {
        top: 23,
        left: 0,
        position: "absolute",
        color: "rgba(255,35,0,1)",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: 'italic'
    },
    tripDestinationColumn: {
        width: 85,
        marginLeft: 15,
        marginBottom: 1
    },
    tripDestination: {
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold"
    },
    after: {
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold"
    },
    amountAfter: {
        color: "#121212",
        fontSize: 20,
        marginLeft: 2,
        marginTop: 25,
        fontWeight: "bold"
    }
  });