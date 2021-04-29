import * as React from 'react';
import { StyleSheet, AppRegistry, View, Text, Button, Alert, Image, Linking, TextInput, TouchableOpacity, SafeAreaView, ScrollView,TouchableHighlight, CheckBox } from 'react-native';

export default function Trip(props) {

    const onPress = () => props.navigation.navigate("TramLocation", {
      from: props.from,
      destination: props.destination
    });

    const [isSelected, setSelection] = React.useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TouchableHighlight style={styles.link} onPress={onPress}>
            <View style={styles.divider}>
              <View elevation={25} style={styles.tripRow}>
                <View style={styles.column}>
                  <Image
                    style={styles.logo}
                    source={require('../../src/assets/L.png')}
                  />
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Time </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 09:00 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Desination </Text>
                    <Text style={styles.infoSpec}> 09:38 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Arrives In </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 10m </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={onPress}>
            <View style={styles.divider}>
              <View style={styles.tripRow}>
                <View style={styles.column}>
                  <Image
                      style={styles.logo}
                      source={require('../../src/assets/L.png')}
                  />
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Time </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 09:30 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Destination </Text>
                  <Text style={styles.infoSpec}> 10:08 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Arrives In </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 40m </Text>
                </View>
                    
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={onPress}>
            <View style={styles.divider}>
              <View style={styles.tripRow}>
                <View style={styles.column}>
                  <Image
                      style={styles.logo}
                      source={require('../../src/assets/L.png')}
                  />
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Time </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 10:00 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Destination </Text>
                  <Text style={styles.infoSpec}> 10:38 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Arrives In </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 1hr 10m </Text>
                </View>
                    
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={onPress}>
            <View style={styles.divider}>
              <View style={styles.tripRow}>
                <View style={styles.column}>
                  <Image
                      style={styles.logo}
                      source={require('../../src/assets/L.png')}
                  />
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Time </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 10:30 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Destination </Text>
                  <Text style={styles.infoSpec}> 11:08 </Text>
                </View>

                <View style={styles.column2}>
                  <Text style={styles.infoHeading}> Arrives In </Text>
                  <Text style={{color: '#54F740', paddingTop: 18, fontSize: 20}}> 1hr 40m </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      top: 0, left: 0,
      right: 0, bottom: 0,
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
      alignSelf: "stretch"
    },
    scrollView: {
      alignSelf: "stretch",
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
    },
    link: {
      alignSelf: "stretch"
    },
    row: {
      alignSelf: "stretch",
      flexDirection: 'row',
    },
    column: {
      alignSelf: "stretch",
      flexDirection: 'column',
      paddingTop: 20,
      alignItems: 'center',
    },
    column2: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    tripRow: {
      borderColor: 'white',
      borderWidth: 1.5,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      paddingTop: 5,
      paddingRight: 10,
      alignSelf: "stretch",
      height: 100,
      top: 5, left: 7,
      right: 0, bottom: 100,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 3,
        width: 1,
      },
      marginRight: 15
    },
    divider: {
      borderColor: '#40484a',
      height: 120,
      alignSelf: "stretch"
    },
    header: {
      fontWeight: '300',
      fontSize: 35,
      textAlign: 'center',
      color: "white",
      paddingTop: 20,
      paddingLeft: 5,
      paddingBottom: 20,
    },
    infoHeading: {
      color: 'white',
      fontSize: 20,
      top: 10,
      paddingTop: 5
    },
    infoSpec: {
      color: 'white',
      fontSize: 20,
      paddingTop: 18,
      paddingRight: 4
        
    },
    mostRecent: {
      fontSize: 16,
      color: "#D6DCDE",
      paddingLeft: 10,
    },
    logo: {
      paddingTop: 20,
      width: 80,
      height: 50,
      resizeMode: 'contain',
    },
    checkbox: {
      alignSelf: "center",
    },
    checkboxContainer: {
    flexDirection: "column",
    marginBottom: 20,
    },
    button: {
      width: 130,
      height: 40,
      borderRadius: 20,
      marginTop: 75,
      marginLeft: 101,
      borderColor: '#3382FF',
      backgroundColor: '#3382FF',
    },
    buttonText: {
      color: 'white',
      paddingTop: 5,
      paddingRight: 2,
      fontSize: 25,
      textAlign: "center"

    },
  });