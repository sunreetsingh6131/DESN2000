import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';

//https://media3.architecturemedia.net/site_media/media/cache/54/5f/545f10956c33ce43fec859dc3dbe4c95.jpg
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  search() {
    if (this.from && this.destination) this.props.navigation.navigate('TramSearchResult', {
      from: this.from,
      destination: this.destination
    });
    
    else alert("Please enter a from and destination stop");
  }

  render() {
    const image = { url: "https://newsroom.unsw.edu.au/sites/default/files/styles/full_width/public/thumbnails/image/light_rail_passing_high_street_stop_t_at_unsw_3.jpg?itok=b40W-5DO" };
    return (
    <View style={{flex:1}}>
    <ImageBackground source={image} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar style={{ paddingTop: 40 }} options={this.props.services.tramService.getStops()} onValueChange={(stop) => this.from = stop} placeholder="From"/>
          <SearchBar style={{ paddingTop: 60 }} options={this.props.services.tramService.getStops()} onValueChange={(stop) => this.destination = stop} placeholder="Destination"/>
          <Button title="Search" onPress={() => this.search()}/>
        </View>
        <View style={styles.contentContainer}>
            <View>
                <TouchableOpacity
                  style={{shadowColor: "#000",shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 4.00,}}
                  onPress={() => this.props.navigation.navigate('FriendsList')}
                >
                  <FontAwesome5 name="user-friends" size={70} color="white" style={styles.button}/>
                  <Text style={styles.buttonText}>
                    Friends List
                  </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 4.00,}}
                  onPress={() => this.props.navigation.navigate('OpalCards')}
                >
                  <MaterialIcons name="payment" size={70} color="white" style={styles.button}/>
                  <Text style={styles.buttonText}>
                    Opal Cards
                  </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    searchBarContainer: {
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
      // backgroundColor: 'rgba(64, 72, 74, 0.97)',
      paddingTop: "20%",
      alignItems: 'center',

    },
    buttonText: {
      color: 'white',
      //color: "#37a3c4",
      fontWeight: "bold",
      /*fontFamily: 'Avenir',*/
      fontSize: 33,
      textAlign: "center"

    },
    button: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 60,
      paddingBottom: 0
    },
    bottomBar: {
      height: "5%",
      backgroundColor: 'rgba(105, 105, 105, 0.95)',
      // backgroundColor: 'rgba(64, 72, 74, 0.8)',
      // backgroundColor: "#40484a",
    }
  });
