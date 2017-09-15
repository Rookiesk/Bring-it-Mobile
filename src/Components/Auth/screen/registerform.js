import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationActions } from 'react-navigation'
import axios from 'axios'
import store from 'react-native-simple-store';

export default class Register extends Component {
    constructor(props) {
        super(props)
    //    this.register = this.register.bind(this)
        this.state = {
            username: '',
            email:'',
            password: '',
            repassword:'',
            firstname:'',
            lastname:'',
            birthdate:'',
            phone:'',
            citizenid:'',
            role:''
        }
    }
    static navigationOptions = {
        header: null
    };
   
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}> Register</Text>
                </View>
                <View style={styles.formContainter}>
                    <TextInput style={styles.input}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="Username"
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput style={styles.input}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        placeholder="E-mail "
                        keyboardType='email-address'
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput style={styles.input}
                        placeholder="password"
                        secureTextEntry
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(password) => this.setState({password})}
                    />
                    <TextInput style={styles.input}
                        placeholder="re-password"
                        secureTextEntry
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(repassword) => this.setState({repassword})}
                    />
                   <TextInput style={styles.input}
                        placeholder="Firstname"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(firstname) => this.setState({firstname})}
                    />
                   <TextInput style={styles.input}
                        placeholder="Lastname"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(lastname) => this.setState({lastname})}
                    />
                   <TextInput style={styles.input}
                        placeholder="Birth date"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(birthdate) => this.setState({birthdate})}
                    />
                   <TextInput style={styles.input}
                        placeholder="Phone number"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(phone) => this.setState({phone})}
                    />
                   <TextInput style={styles.input}
                        placeholder="Citizen-id"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(citizenid) => this.setState({citizenid})}
                    />
                   <TextInput style={styles.input}
                        placeholder="Role"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        onChangeText={(role) => this.setState({role})}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
                        <Text style={styles.buttonText} >Sign-up</Text>
                    </TouchableOpacity>

                    <Text style={styles.errormessage} >{this.state.errormessage}</Text>
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
        marginTop: 5,
        width: 250,
        textAlign: 'center',
        opacity: 1
    },
    errormessage: {
        color: '#00F'
    },
    formContainter: {
        padding: 25
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginBottom: 5,
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
    }
})
