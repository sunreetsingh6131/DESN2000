import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';


export default function testHomeScreen() {
    return (
    <View style={styles.container}>

        <View style={styles.searchBarContainer}>
            <SearchBar placeholder = "From"/>
            <SearchBar placeholder = "Destination"/>
        </View>
        
        <View style={styles.contentContainer}>
            <View>
                <FontAwesome5 name="user-friends" size={30} color="white" style={styles.button}
                    onPress={() => {Alert.alert('COOL!!!!');}}
                />
                <Text style={styles.buttonText}>
                    Friends List
                </Text>
           </View>

           <View>
                 <MaterialIcons name="payment" size={30} color="white" style={styles.button}
                    onPress={() => {Alert.alert('COOL x2!!!!');}}
                 />
                 <Text style={styles.buttonText}>
                   Top Up
                 </Text>
           </View>

           <View>
                 <MaterialIcons name="person" size={30} color="white" style={styles.button}
                    onPress={() => {Alert.alert('COOL x3!!!!!');}}
                 />
                 <Text style={styles.buttonText}>
                   Profile
                 </Text>
           </View>
          
        </View>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: "#484848",
      bottom: 0,
    },
    searchBarContainer: {
      paddingTop: "20%",
      alignItems: 'center'
    },
    buttonText: {
      flexDirection: 'row',
      color: "white",
      fontWeight: "bold",
      fontSize: 15,
      textAlign: "center"

    },
    button: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 0
    },
    bottomBar: {
      height: "5%",
      backgroundColor: "#484848",
    }
  });