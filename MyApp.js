import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import MapView from './src/MapView'

export default class MyApp extends Component {


    render() {
    var region = {
    latitude: 39.9047253699,
    longitude: 116.407215498,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
    };
        return <MapView region={region} pitchEnabled={false} style={{ flex: 1 }} />;
    }
}




