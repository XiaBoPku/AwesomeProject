import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

export default class MapView extends React.Component {
    
    static propTypes ={
    pitchEnabled:PropTypes.bool,
    region: PropTypes.shape({
                            /**
                             * Coordinates for the center of the map.
                             */
                            latitude: PropTypes.number.isRequired,
                            longitude: PropTypes.number.isRequired,
                            
                            /**
                             * Distance between the minimum and the maximum latitude/longitude
                             * to be displayed.
                             */
                            latitudeDelta: PropTypes.number.isRequired,
                            longitudeDelta: PropTypes.number.isRequired,
                            }),
    }
    
    constructor(props){
        super(props)
    }
    
    render () {
        return <RNTMap {...this.props} />;
    }
}

const RNTMap = requireNativeComponent('RNTMap', MapView)

