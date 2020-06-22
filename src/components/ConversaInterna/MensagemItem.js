import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class MensagemItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <View style={MensagemItemStyle.area}> 
            <Text>{this.props.data.m}</Text>
          </View>
        );
    }
}

const MensagemItemStyle = StyleSheet.create({
    area: {
      margin: 10,
      backgroundColor: '#999999',
      padding: 10,
      alignSelf:'baseline',
      maxWidth: '80%'
    }
});