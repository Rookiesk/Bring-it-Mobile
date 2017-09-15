import React, { Component } from 'react';

import { View, Text, Alert, AsyncStorage, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Container, Icon, Button, Footer, FooterTab, Tabs, Tab } from 'native-base';
import { Form, TextValidator } from 'react-native-validator-form';
import SplashScreen from 'react-native-splash-screen';
import { NavigationActions } from 'react-navigation';
// import axios from 'axios'
// import store from 'react-native-simple-store';
//const CONNECTION = 'Username-Password-Authentication'



export default class Login extends Component {
    constructor(props) {
        super(props)
        this._onPressLogin = this._onPressLogin.bind(this)
        this.state = {
            email: '',
            email_errormessage: '',
            password: '',
            password_errormessage: '',
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

   _navigationresetStack(route) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Drawer'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    } 

    _userLogin(json , target) {
           return fetch( DOMAIN+target, {
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
                   if(response.success.status ==1){
                    Alert.alert("Your account has been banned")
                   }else{
                    this._onValueChange(response.success.token)
                    .then(() => {
                        var route = 'Drawer'
                        this._navigationresetStack(route)
                    })  
                   }
                              
               } 
                else if(response.error) {
                        Alert.alert("Invalid login attempt")
                }
           })
          
        }

        validateEmail = (value) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(value);
          };

        validatePassword = (value) => {
            var re = /^[a-zA-Z\-0-9]{8,15}$/;
              return re.test(value);
            };

    _validateForm(){

        if(!this.state.email){
            this.setState({ email_errormessage: 'The e-mail field is required'});
        }else if (!this.validateEmail(this.state.email)) {
            // not a valid email
            this.setState({ email_errormessage: 'Wrong Format. Email can be email format only.'});
          } else {
            // valid email
            this.setState({ email_errormessage: ''});
          }

        if(!this.state.password){
            this.setState({ password_errormessage: 'The password field is required'});
        }else if(!this.validatePassword(this.state.password)){
            this.setState({ password_errormessage: '“Wrong Format.Password can be A-Z,a-z,0-9 and length 8-15 only'});
        }else {
            // valid email
            this.setState({ password_errormessage: ''});
          }
        
        if (this.validateEmail(this.state.email) && this.validatePassword(this.state.password)) { 
            var ValidateForm = true ;
        }
    }

    _onPressLogin() {
        this._validateForm();
        if(this.state.password&&this.state.email){
        if (ValidateForm = true){ 
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            const json = JSON.stringify(data)
            const url = '/api/login'
            this._userLogin(json,url)
        }
    }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../img/logo.png')} />
                </View>
                <View style={styles.formContainter}>
                    <TextInput style={styles.input}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="email-address"
                        keyboardType='email-address'
                        returnKeyType ="next"
                        onChangeText={(email) => this.setState({email})}
                    />
                    <Text style={styles.errormessage} >{this.state.email_errormessage} </Text>
                    <TextInput style={styles.input}
                        placeholder="password"
                        secureTextEntry
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType ="next"
                        onChangeText={(password) => this.setState({password})}
                    />
                     <Text style={styles.errormessage} >{this.state.password_errormessage} </Text>
                    <TouchableOpacity style={styles.buttonLoginContainer} onPress={this._onPressLogin}>
                        <Text style={styles.buttonText} >LOGIN</Text>                    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSignupContainer} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.buttonText} >SIGN UP</Text>                    
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
    logo: {
        width: 240,
        height: 240
    },
    title: {
        color: '#FFF',
        marginTop: 40,
        height:100,
        textAlign: 'center',
        opacity: 1,
        fontSize: 35,
        
    },
    errormessage: {
        color: '#ff0000'
    },
    formContainter: {
        padding: 20
    },
    input: {
        height: 50,
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: 0,
        color: '#FFF',
        paddingHorizontal: 7
    },
    buttonLoginContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 13
    },
    buttonSignupContainer: {
        marginTop:15,
        backgroundColor: '#2974b9',
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#FFF'
    },

})
