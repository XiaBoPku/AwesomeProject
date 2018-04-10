import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

export default class MapView extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    render () {
        return <RNTMap {...this.props} />;
    }
}

const RNTMap = requireNativeComponent('RNTMap', MapView)

