import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getContactList } from './actions/ChatActions';

export class ContatoList extends Component {
    
    static navigationOptions = {
        title: '',
        tabBarLabel: 'Contato',
        header: null
    }
    
    constructor(props) {
        super(props);
        this.state = {};

        this.props.getContactList();
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.props.contacts}
                    renderItem={({item})=> {
                        return <Text>{item.name}</Text>
                    }}
                />
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
        uid: state.auth.uid,
        contacts: state.chat.contacts

    };
};

const ContatoListConnect = connect(mapStateToProps, { getContactList })(ContatoList);

export default ContatoListConnect;