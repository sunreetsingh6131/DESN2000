import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function FriendLocation(props) {
    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle}
                initialRegion={{
                    latitude: -33.8826164,
                    longitude: 151.2043932,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{ latitude: -33.8826164, longitude: 151.2043932 }} title="Tram" description="Info" />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});