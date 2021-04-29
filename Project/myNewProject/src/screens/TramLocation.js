import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import stopImage from "../assets/L.png";
import tramImage from "../assets/tram.png";

export default class TramLocation extends React.Component {
    constructor(props) {
        super(props);

        this.from = this.props.route.params.from;
        this.destination = this.props.route.params.destination;

        this.fromStop = this.props.services.tramService.stops[this.from];
        this.destinationStop = this.props.services.tramService.stops[this.destination];
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.header}>{this.from} To {this.destination}</Text>
                    <Text style={styles.timing}>
                        <Text style={styles.arrives}>Arrives in 4m</Text> <Text style={styles.delay}>(5m Late)</Text>
                    </Text>
                    <Text style={styles.seats}>20 Free Seats</Text>
                </View>
                <View style={styles.map}>
                    <MapView
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude: -33.894012,
                            longitude: 151.219880,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker coordinate={{ latitude: this.fromStop.lat, longitude: this.fromStop.lon }} title={this.from}>
                            <Image source={stopImage} style={{height: 35, width:35 }} />
                        </Marker>
                        <Marker coordinate={{ latitude: this.destinationStop.lat, longitude: this.destinationStop.lon }} title={this.destination}>
                            <Image source={stopImage} style={{height: 35, width:35 }} />
                        </Marker>
                        <Marker coordinate={{ latitude: -33.8826164, longitude: 151.2043932 }} title="Tram">
                            <Image source={tramImage} style={{height: 35, width:35 }} />
                        </Marker>
                    </MapView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    info: {
        alignSelf: "stretch",
        backgroundColor: 'rgba(105, 105, 105, 0.95)',
        height: 350
    },
    map: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        margin: 20
    },
    timing: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20
    },
    arrives: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20
    },
    delay: {
        color: 'red',
        fontSize: 20,
        marginLeft: 20
    },
    seats: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});