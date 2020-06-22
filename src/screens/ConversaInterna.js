import React, { Component } from 'react';
import { 
    View, 
    Text, 
    FlatList,
    StyleSheet, 
    TouchableHighlight, 
    Image, 
    BackHandler ,
    TextInput
    } from 'react-native';
import { connect } from 'react-redux';

import MensagemItem from '../components/ConversaInterna/MensagemItem';

import { setActiveChat } from '../actions/ChatActions';

export class ConversaInterna extends Component {
    
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        tabBarVisible: false,
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
        this.state = {
            tmpMsg: [
                {key:1 , m: 'Oi tudo bem?'},
                {key:2 , m: 'Sim e você?'},
                {key:3 , m: 'Tudo ótimo :D'},
                {key:4 , m: 'Essa é uma mensagem bem grande que tem como objetivo fazer alguma coisa para aparecer :D'}
            ]
        };

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
                <FlatList 
                    style={styles.chatArea}
                    data={this.state.tmpMsg}
                    renderItem={({item})=><MensagemItem data={item}/>}
                />
                <View style={styles.sendArea}>
                    <TextInput style={styles.sendInput}/>
                    <TouchableHighlight style={styles.sendButtun}>
                        <Image style={styles.sendImage} source={require('../assets/images/send.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chatArea: {
        flex: 1,
        backgroundColor: '#CCCCCC'
    },
    sendArea: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#EEEEEE'
    },
    sendInput: {
        height: 50,
        flex: 1
    },
    sendButtun: {
        width: 50,
        height: 50
    },
    sendImage: {
        width: 50,
        height: 50
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