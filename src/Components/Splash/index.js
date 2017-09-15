import React, { Component } from 'react';

import { View, Text, StyleSheet, AsyncStorage, Image, TextInput, TouchableOpacity, KeyboardAvoidingView , Button} from 'react-native';
import { NavigationActions } from 'react-navigation'
// import store from 'react-native-simple-store';
// import axios from 'axios'

export default class Spash extends Component {
    constructor(props) {
        super(props)
        // axios.get('http://127.0.0.1:8000/api/test').then((res) => {
        //     console.log(res)
        // }).catch((err) => {
        //     console.log(err)
        // })
        AsyncStorage.getItem('Auth')
            .then((res) => {
                if(res) {
                    setTimeout(function() {
                        const resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Drawer'})
                            ]
                        })
                        this.props.navigation.dispatch(resetAction)
                    }.bind(this), 1500);
                } else {
                    setTimeout(function() {
                        const resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Auth'})
                            ]
                        })
                        this.props.navigation.dispatch(resetAction)
                    }.bind(this), 1500);
                }
            })
    }
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                   <Image style={styles.logo} source={require('../../../img/logo.png')} />
                    {/* <Text style={styles.title}>Bring-It</Text>
                    <Text style={styles.title}>Application</Text> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 230,
        height: 230
    },
    title: {
        fontSize: 30,
        color: '#FFF',
        marginTop: 1,
        width: 300,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainter: {
        padding: 20
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    },

})
