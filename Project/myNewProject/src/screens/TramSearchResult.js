import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Button, TextInput, Alert, AsyncStorage } from 'react-native';
import Trips from '../components/Trips';

export default class TramSearchResult extends React.Component {

  constructor(props) {
    super(props);

    this.from = this.props.route.params.from;
    this.destination = this.props.route.params.destination;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>{this.from} To {this.destination}</Text>
        </View>
        <View style={styles.body}>
          <Trips {...this.props} from={this.from} destination={this.destination} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(105, 105, 105, 0.95)',
  },
  header: {
    backgroundColor: 'rgba(105, 105, 105, 0.95)',
  },
  body: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    margin: 30
  },
});