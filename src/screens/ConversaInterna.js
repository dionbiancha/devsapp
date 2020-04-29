import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import { setActiveChat } from '../actions/ChatActions';


export class ConversaInterna extends Component {
    
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        headerLeft: (
            <TouchableHighlight onPress={() => { 
                navigation.state.params.voltarFunction()
                }} 
                underlayColor={false}>
                <Image source={require('react-navigation-stack/src/vendor/views/assets/back-icon.png')} 
                style={{width: 25, height: 25, marginLeft: 20}} />
            </TouchableHighlight>
        )
    });
    
    constructor(props) {
        super(props);
        this.state = {};

        this.voltar = this.voltar.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({voltarFunction: this.voltar});
        BackHandler.addEventListener('hardwareBackPress', this.voltar);
    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.voltar);
    }

    voltar() {
        this.props.setActiveChat('');
        this.props.navigation.goBack();

        return true;
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Conversa Interna</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        uid: state.auth.uid
    };
};

const ConversaInternaConnect = connect(mapStateToProps, { setActiveChat })(ConversaInterna);

export default ConversaInternaConnect;