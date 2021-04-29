import * as React from 'react';
import { StyleSheet, View, Text, Button, Alert, Image, Linking, TextInput,SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import credentials from '../services/defaults/credentials.json'

export default function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={{flex:1, backgroundColor: '#40484a' }}>
            <View><SafeAreaView style={{ backgroundColor: '#40484a' }} /></View>
            <Text style={styles.header}> Welcome </Text>
            <Image
                style={styles.lightrailLogo}
                source={require('../../assets/pngwing.com.png')}
            />

            <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.loginForm}
                placeholder= "OPAL EMAIL"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                secureTextEntry={true}
                style={styles.loginForm}
                placeholder= "PASSWORD"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            </View>
            
            <View style={styles.btnContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => { props.navigation.navigate('HomeScreen') } }>
                      <Text style={styles.buttonText}> Login </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.button}
                       onPress={() => {Linking.openURL('https://transpo rtnsw.info/opal-view/#/create-account')}}>
                      <Text style={styles.buttonText}> Sign Up </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      backgroundColor: '#40484a',
    },
    header: {
      fontWeight: '300',
      fontSize: 35,
      color: "white",
      paddingBottom: 100,
      paddingLeft: 10,
    },
    loginForm: {
      height: 40,
      backgroundColor: 'white',
      borderColor: 'gray',
      width: "90%",
      borderWidth: 1,
      paddingLeft: "3%"
    },
    btnContainer: {
      paddingLeft: 25,
      borderColor: '#3382FF',
      alignItems: 'center'
    },
    buttonBox: {
      fontWeight: "bold",
      fontSize: 15,
      textAlign: "center",
      borderRadius: 10,
      borderColor: '#3382FF',
      backgroundColor: '#3382FF',
    },
    searchBarContainer: {
      alignItems: 'center',
      paddingBottom: "5%",
    },
    lightrailLogo: {
      width: 300,
      height: 150,
      resizeMode: 'contain',
      paddingLeft: 370,
    },
    buttonText: {
      color: 'white',
      fontWeight: "bold",
      paddingTop: 5,
      fontSize: 25,
      textAlign: "center"

    },
    button: {
      width: 130,
      height: 40,
      borderRadius: 20,
      marginTop: 5,
      borderColor: '#3382FF',
      backgroundColor: '#3382FF',
      color: 'white'
    },
  });