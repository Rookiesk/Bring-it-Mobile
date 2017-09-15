import React, { Component } from 'react';

import { View, Text, Alert, AsyncStorage, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Container, Icon, Button, Footer, FooterTab, Tabs, Tab } from 'native-base';
import SplashScreen from 'react-native-splash-screen'
import { NavigationActions } from 'react-navigation'
// import axios from 'axios'
// import store from 'react-native-simple-store';
//const CONNECTION = 'Username-Password-Authentication'

const DOMAIN = 'http://192.168.8.2'



/* export const signin = (email, password, callback, errorCallback) => {
    return axios.post(`${DOMAIN_AUTH}/api/login`, {
            "email": email,
            "password": password
        })
        .then(function (response) {
            callback()
            
        })
        .catch(function (error) {
            errorCallback()
            console.log(error)
        })
}  */
var indexstack = 0 ;
export default class Login extends Component {
    constructor(props) {
        super(props)
        this._userLogin = this._userLogin.bind(this)
        this.state = {
            email: '',
            password: '',
            errormessage: ''
        }
    }
    static navigationOptions = {
        header: null
    };
    
    async _onValueChange(selectedValue) {
        try {
        await AsyncStorage.setItem('Auth', selectedValue);
        const value = await AsyncStorage.getItem('Auth');
       
        if (value !== null){
        // We have data!!
             console.log(value);
        }
        } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
        }
    }

   _navigationHome() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Drawer'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    } 

    _fetchPost( json, target ) {

    }

    _userLogin() {
        if(this.state.email && this.state.password) { 
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            const json = JSON.stringify(data)
            const target = '/api/login'
            fetch( DOMAIN+target, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: json
            })
            .then((response) => response.json())
            .then((response) => {
                if (response.success) {
                    Alert.alert("Login Success!"),  
                    this._onValueChange(response.success.token)
                    .then(() => {
                        const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Drawer'})
                        ]
                    })
                    this.props.navigation.dispatch(resetAction)})             
                } else if(response.error) {
                     console.log(' error '),
                     this.setState({ errormessage: 'Username or Password are invalid'});
                }
            })          
        }
    } 

    /* login() {
        if(this.state.email && this.state.password) {
            signin(this.state.email, this.state.password, (res) => {
                console.log(' success ')
                store.update('auth', {
                    expire: new Date().getTime()
                }).then(() => {
                    const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Drawer'})
                        ]
                    })
                    this.props.navigation.dispatch(resetAction)
                })
            }, (err) => {
                console.log(' fail ')
                this.setState({ errormessage: 'Username or Password are invalid'});
            })
        }
    }     */

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}> Bring-it {'\n'} Application</Text>
                </View>
                <View style={styles.formContainter}>
                    <TextInput style={styles.input}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="email-address"
                        keyboardType='email-address'
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput style={styles.input}
                        placeholder="password"
                        secureTextEntry
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(password) => this.setState({password})}
                    />
                     <Text style={styles.errormessage} >{this.state.errormessage} </Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this._userLogin}>
                        <Text style={styles.buttonText} >LOGIN</Text>                    
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
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
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        marginTop: 40,
        height:100,
        textAlign: 'center',
        opacity: 1,
        fontSize: 30,
        
    },
    errormessage: {
        color: '#00F'
    },
    formContainter: {
        padding: 20
    },
    input: {
        height: 50,
        fontSize: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },

})
