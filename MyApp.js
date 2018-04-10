import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import MapView from './MapView'

export default class MyApp extends Component {

    render() {
        return <MapView style={{ flex: 1 }} />;
    }
}




