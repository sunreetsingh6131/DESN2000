import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Button, TextInput, Alert, ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import Trips from '../components/Trips';
//https://media3.architecturemedia.net/site_media/media/cache/54/5f/545f10956c33ce43fec859dc3dbe4c95.jpg
export default class CreateTripScreen extends React.Component {

        constructor(props){
            super(props);
            this.state = {
              show: false,
            };
        }
        
        ShowHideComponent = () => {
            if (this.state.show == true) {
              this.setState({ show: false });
            } else {
              this.setState({ show: true });
            }
        };

        render() {
            return (
                <View style={{flex:1}}>
                <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>
                        <View style={styles.searchBarContainer}>
                        <SearchBar style={{ paddingTop: 40 }} options={this.props.services.tramService.getStops()} onValueChange={(stop) => this.from = stop} placeholder="From"/>
                        <SearchBar style={{ paddingTop: 60 }} options={this.props.services.tramService.getStops()} onValueChange={(stop) => this.destination = stop} placeholder="Destination"/>
                        </View>

                            <View style={{paddingLeft: 25, paddingBottom: 5, backgroundColor: 'rgba(105, 105, 105, 0.95)', alignItems: 'center'}}>
                                <TouchableOpacity
                                  style={styles.button}
                                  onPress={() => this.ShowHideComponent()}>
                                  <Text style={styles.buttonText}> Search </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{height: 450}}>
                
                            {
                                this.state.show ? <Trips {...this.props} from={this.from} destination={this.destination} /> : null
                            }
                            </View>

                            <View>
                            {
                                this.state.show ? <Button style={styles.button}
                                        title = "Create Trip"
                                        onPress={() => this.props.navigation.navigate('FriendsList')}
                                        /> : null
                            }
                            </View>

                        </View>
                </ScrollView>
                </View>
            );
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
    },
    contentContainer: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
      // backgroundColor: 'rgba(64, 72, 74, 0.97)',
      // backgroundColor: '#40484a',
    },
    scrollView: {
      alignSelf: "stretch",
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
    },
    searchBarContainer: {
      alignItems: 'center',
      paddingTop: 100
    },
    buttonText: {
      color: 'white',
      paddingRight: 2,
      fontSize: 30,
      textAlign: "center"

    },
    loginForm: {
      height: 40,
      backgroundColor: 'white',
      borderColor: 'gray',
      width: "90%",
      borderWidth: 1,
      paddingLeft: "3%"
    },
    button: {
      width: 130,
      height: 40,
      borderRadius: 20,
      marginTop: 75,
      marginLeft: 101,
      borderColor: '#3382FF',
      backgroundColor: '#3382FF',
      color: 'white'
    },
    bottomBar: {
      height: "5%",
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
      // backgroundColor: 'rgba(64, 72, 74, 0.8)',
      // backgroundColor: "#40484a",
    }
  });