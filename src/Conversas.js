import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from './actions/AuthActions';

export class Conversas extends Component {
    
    static navigationOptions = {
        title: '',
        header: null
    }
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Pagina Conversas</Text>
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
        status: state.auth.status
    };
};

const ConversasConnect = connect(mapStateToProps, { checkLogin })(Conversas);

export default ConversasConnect;