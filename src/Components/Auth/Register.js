import React, { Component } from 'react';

import { View,Picker, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView, KeyboardAvoidingView,Alert } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Left, Right, Body} from 'native-base';

import SplashScreen from 'react-native-splash-screen'
import { NavigationActions } from 'react-navigation'
import DatePicker from 'react-native-datepicker'
// import axios from 'axios'
// import store from 'react-native-simple-store';
var ValidateForm = false;
export default class Register extends Component {
    constructor(props) {
        super(props)
     //    this.register = this.register.bind(this)
        this._onPressRegister = this._onPressRegister.bind(this)
        this.state = {
            username: '',   errormessage_username: '',
            email:'',       errormessage_email: '',
            password: '',   errormessage_password: '',
            repassword:'',  errormessage_repassword: '',
            firstname:'',   errormessage_firstname: '',
            lastname:'',    errormessage_lastname: '',
            birthdate:'',   errormessage_birthdate: '',
            phone:'',       errormessage_phone: '',
            citizenid:'',   errormessage_citizenid: '',
            role:'',        errormessage_role: '',
            
        }
    }

    static navigationOptions = {
        header: null
    };
   _navigationresetStack(route) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Auth'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    } 
    _userRegister(json , target) {
        console.log(' getin_userRegister ')
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
                   Alert.alert("Register Successful!")
                       var route = 'Auth'
                       this._navigationresetStack(route)      
               }  
            })   
          
        }
    
       
        _validateForm(){

            if(!this.state.username){
                this.setState({ errormessage_username: 'The username field is required'});
            }else if (!this.validateUsername(this.state.username)) {
                this.setState({ erormessage_username: 'Wrong Format. Username be A-Z,a-z,0-9 and length 8-15 only'});
              } else {
                this.setState({ errormessage_username: ''});
              }

            if(!this.state.email){
                this.setState({ errormessage_email: 'The e-mail field is required'});
            }else if (!this.validateEmail(this.state.email)) {
                this.setState({ errormessage_email: 'Wrong Format. Email can be email format only.'});
              } else {
                this.setState({ errormessage_email: ''});
              }
    
            if(!this.state.password){
                this.setState({ errormessage_password: 'The password field is required'});
            }else if(!this.validatePassword(this.state.password)){
                this.setState({ errormessage_password: 'Wrong Format.Password can be A-Z,a-z,0-9 and length 8-15 only'});
            }else {
                this.setState({ errormessage_password: ''});
              }

            if(!this.state.repassword){
                this.setState({ errormessage_password: 'The re-password field is required'});
            }else if(this.state.password===this.state.repassword){
                this.setState({ errormessage_repassword: ''});
            }else{
                this.setState({ errormessage_repassword: 'Re-password is not match with password'});
            }

            if(!this.state.firstname){
                this.setState({ errormessage_firstname: 'The firstname field is required'});
            }else if(!this.validateName(this.state.firstname)){
                this.setState({ errormessage_firstname: 'Wrong Format.Password can be A-Z,a-z and minimun is 6 only'});
            }else {
                this.setState({ errormessage_firstname: ''});
              }

            if(!this.state.lastname){
                this.setState({ errormessage_lastname: 'The lastname field is required'});
            }else if(!this.validateName(this.state.lastname)){
                this.setState({ errormessage_lastname: 'Wrong Format.Password can be A-Z,a-z and minimun is 6'});
            }else {
                this.setState({ errormessage_lastname: ''});
            }

            if(!this.state.birthdate){
                this.setState({ errormessage_birthdate: 'The birthdate field is required'});
            }else {
                this.setState({ errormessage_birthdate: ''});
            }

            if(!this.state.phone){
                this.setState({ errormessage_phone: 'The phone field is required'});
            }else if(!this.validatephone(this.state.phone)){
                this.setState({ errormessage_phone: 'Wrong Format.Phone number can be 0-9 and 10 characters only.'});
            }else {
                this.setState({ errormessage_phone: ''});
            }

            if(!this.state.citizenid){
                this.setState({ errormessage_citizenid: 'The citizenid field is required'});
            }else if(!this.validatecitizenid(this.state.citizenid)){
                this.setState({ errormessage_citizenid: 'Wrong Format.Phone number can be 0-9 and 13 characters only.'});
            }else {
                this.setState({ errormessage_citizenid: ''});
            }

            if(!this.state.role){
                this.setState({ errormessage_role: 'The Role field is required'});
            }else {
                this.setState({ errormessage_role: ''});
            }

            if(this.validateUsername(this.state.username)&&this.validateEmail(this.state.email)&&this.validatePassword(this.state.password)&&this.validateName(this.state.firstname)&&this.validateName(this.state.lastname)&&this.validatephone(this.state.phone) ){
                if(this.state.role&&this.state.birthdate){
                    if(this.state.password===this.state.repassword){
                         ValidateForm = true ;
                    }

                }
            }
        }

        _onPressRegister() {
            this._validateForm();
            if(ValidateForm==true){
            console.log(this.state.username)
                const data = {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    password_confirmation:this.state.repassword,
                    first_name: this.state.firstname,
                    last_name: this.state.lastname,
                    birth_date: this.state.birthdate,
                    phone: this.state.phone,
                    critizen_id: this.state.citizenid,
                    role: this.state.role
                }
                console.log(data);
                const json = JSON.stringify(data)
                console.log(json);
                const url = '/api/register'
                this._userRegister(json,url);
            }
        }
        validateEmail = (value) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(value);
          };
        validateUsername = (value) => {
            var re = /^[a-zA-Z\-0-9]{8,15}$/;
              return re.test(value);
        };
        validatePassword = (value) => {
            var re = /^[a-zA-Z\-0-9]{8,15}$/;
              return re.test(value);
            };
        validateName = (value) => {
            var re = /^[a-zA-Z]{6,}$/;
              return re.test(value);
            };
        // validatebirthdate = (value) => {
        //     var re = /^[a-zA-Z\-0-9]{8,15}$/;
        //       return re.test(value);
        //     };        
        validatephone = (value) => {
            var re = /^[0-9]{10}$/;
              return re.test(value);
            }; 
        validatecitizenid = (value) => {
            var re = /^[0-9]{13}$/;
              return re.test(value);
            };  
        // validaterole = (value) => {
        //     var re = /^[a-zA-Z\-0-9]{8,15}$/;
        //       return re.test(value);
        //     }; 
          
    


    render() {
        return (
            <ScrollView  style={styles.container}>
                <Header>
                    <Body>
                       <Text style={styles.title}> Register </Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("Auth")}>
                            <Icon name="md-arrow-round-back" />
                        </Button>
                    </Right>
                </Header>                
                <View style={styles.formContainter}>
                    <TextInput style={styles.input}
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        placeholder=" Username"
                        returnKeyType ="next"
                        onChangeText={(username) => this.setState({username})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_username} </Text>
                    <TextInput style={styles.input}
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        placeholder=" E-mail "
                        keyboardType='email-address'
                        returnKeyType ="next"
                        onChangeText={(email) => this.setState({email})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_email} </Text>
                    <TextInput style={styles.input}
                        placeholder=" password"
                        secureTextEntry
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        returnKeyType ="next"
                        onChangeText={(password) => this.setState({password})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_password} </Text>
                    <TextInput style={styles.input}
                        placeholder=" re-password"
                        secureTextEntry
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        returnKeyType ="next"
                        onChangeText={(repassword) => this.setState({repassword})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_repassword} </Text>
                   <TextInput style={styles.input}
                        placeholder=" Firstname"
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        returnKeyType ="next"
                        onChangeText={(firstname) => this.setState({firstname})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_firstname} </Text>
                   <TextInput style={styles.input}
                        placeholder=" Lastname"
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        returnKeyType ="next"
                        onChangeText={(lastname) => this.setState({lastname})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_lastname} </Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textHeader}>Birth date</Text>
                        <DatePicker
                        style={styles.DatePicker}
                        date={this.state.birthdate}
                        mode="date"
                        placeholder="Birth date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(birthdate) => {this.setState({birthdate});}}
                        />
                    </View>
                    <Text style={styles.errormessage} >{this.state.errormessage_birthdate} </Text>
                    <TextInput style={styles.input}
                        placeholder=" Phone number"
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        returnKeyType ="next"
                        onChangeText={(phone) => this.setState({phone})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_phone} </Text>
                    <TextInput style={styles.input}
                        placeholder=" Citizen-id"
                        placeholderTextColor="rgba(0,0,0,1.0)"
                        returnKeyType ="next"
                        onChangeText={(citizenid) => this.setState({citizenid})}
                    />
                    <Text style={styles.errormessage} >{this.state.errormessage_citizenid} </Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textHeader} > Role Selector </Text>
                        <Picker style={styles.picker}
                        selectedValue={this.state.role}
                        onValueChange={(value) => this.setState({role: value})}>
                        <Picker.Item label="please select your Role !" value="" />
                        <Picker.Item label="BUYER" value="BUYER" />
                        <Picker.Item label="SHIPPER" value="SHIPPER" />
                        <Picker.Item label="SELLER" value="SELLER" />
                        </Picker>
                    </View>
                    <Text style={styles.errormessage} >{this.state.errormessage_role} </Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressRegister}>
                        <Text style={styles.buttonText} >Sign-up</Text>
                    </TouchableOpacity>

                   
                </View>
            </ScrollView>
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
        width: 210,
        height: 210
    },
    title: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 20,
        opacity: 1
    },
    errormessage: {
        color: '#ff0000'
    },
    formContainter: {
        padding: 20
    },
    inputContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 0,
    },
    input: {
        height: 43,
        fontSize: 18,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        borderColor: 'gray', 
        borderWidth: 2,
        marginBottom: 0,
        color: 'rgba(0,0,0, 1)',
    },
    buttonContainer: {
        marginTop: 5,
        backgroundColor: '#2974b9',
        paddingVertical: 15
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },
    textHeader: {
        fontSize: 20,
        color: '#FFF',
    },
    DatePicker: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: 250,
        height: 40,
        marginBottom:5
    },
    picker: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginBottom: 5,
        color: '#FFF',
        width: 250,
        height: 40,
    }
})
