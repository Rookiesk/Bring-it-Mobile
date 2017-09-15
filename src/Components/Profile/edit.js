import React, { Component } from 'react';
import { Container, Header, Item, Input, Tab, Tabs, Text, ScrollableTab, Card, CardItem, Body, Thumbnail, Button, Icon,Right, Left, Content } from 'native-base';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  AsyncStorage,
  Alert
} from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class editProfile extends Component {
    constructor(props) {
        
        super(props)
        this._onPressUpdate = this._onPressUpdate.bind(this)
        this.state = {
            id:'',
            password:'',
            newpassword:'',
            repassword:'',
            phone:'',
            errormessage_repassword:'',
            errormessage_phone:'',
            errormessage_password:'',
        }
        
        }
        async componentWillMount(){
            const token = await AsyncStorage.getItem('Auth');
            console.log(token);
            const url = '/api/users/getme'
            this._getUser(token,url).then((response) => {
                    if (response.success) {
                        this.setState({
                            id : response.success.id,
                            password : response.success.password,
                            phone : response.success.phone,
                        })        
                    } else if(response.error) {
                        console.log(' error ')
                    }
            })
        }
        _getUser(token,target) {
            
            return fetch( DOMAIN+target, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+token
                }}).then((response) => response.json())   
            
        }  
        async onUpdate(json,target){
            const token = await AsyncStorage.getItem('Auth');
            console.log(' getin_onUpdate ')
            return fetch( DOMAIN+target, {
                 method: "PATCH",
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'Authorization': 'Bearer '+token
                 },
                 body: json
             })
             .then((response) => response.json())
             .then((response) => {
                    Alert.alert("Update Successful!")       
             })   
        }
        _onPressUpdate(){
            this._validateForm();
            if(this.validatephone(this.state.phone)){
            if(!this.state.newpassword){
                newpassword : this.state.password
            }
            const data = {
                password : this.state.newpassword,
                phone : this.state.phone,
            }
            const json = JSON.stringify(data)
            const url = '/api/users/'+this.state.id ;
            console.log(url);
            this.onUpdate(json,url);
        }}

        _validateForm(){
                         if(!this.validatePassword(this.state.newpassword)){
                            this.setState({ errormessage_newpassword: 'Wrong Format.Password can be A-Z,a-z,0-9 and length 8-15 only'});
                        }else{
                            this.setState({ errormessage_newpassword: ''});
                          }

                          if(!this.state.newpassword){
                            this.setState({ errormessage_newpassword: ''});
                        }   

                         if(this.state.newpassword ===this.state.repassword){
                            this.setState({ errormessage_repassword: ''});
                        }else if (this.state.newpassword !==this.state.repassword ){
                            this.setState({ errormessage_repassword: 'Re-password is not match with password'});
                        }

                        if(!this.state.phone){
                            this.setState({ errormessage_phone: 'The phone field is required'});
                        }else if(!this.validatephone(this.state.phone)){
                            this.setState({ errormessage_phone: 'Wrong Format.Phone number can be 0-9 and 10 characters only.'});
                        }else {
                            this.setState({ errormessage_phone: ''});
                        }
                    
            
                    }

        validatephone = (value) => {
            var re = /^[0-9]{10}$/;
              return re.test(value);
            }; 
        validatePassword = (value) => {
            var re = /^[a-zA-Z\-0-9]{8,15}$/;
              return re.test(value);
            };

    render() {
        return (
        <Container >
                <Content style={styles.Content}>
                    <CardItem style={styles.CardItem}>
                        <Body>
                            <Text style={styles.Text}> New password: </Text>
                            <TextInput style={styles.input}
                                placeholder=" New password"
                                placeholderTextColor="rgba(0,0,0,1.0)"
                                onChangeText={(newpassword) => this.setState({newpassword})}
                            />
                            <Text style={styles.errormessage} >{this.state.errormessage_newpassword} </Text>

                            <Text style={styles.Text} > re-Password : </Text>
                            <TextInput style={styles.input}
                                placeholder=" re-Password"
                                placeholderTextColor="rgba(0,0,0,1.0)"
                                onChangeText={(repassword) => this.setState({repassword})}
                            />
                            <Text style={styles.errormessage} >{this.state.errormessage_repassword} </Text>

                            <Text style={styles.Text}> Phone number : </Text>
                            <Input style={styles.input}
                                placeholder=" Phone number"
                                placeholderTextColor="rgba(0,0,0,1.0)"
                                onChangeText={(phone) => this.setState({phone})}
                                defaultValue={this.state.phone}
                            />
                            <Text style={styles.errormessage} >{this.state.errormessage_phone} </Text>
                            <Button success onPress={this._onPressUpdate}>
                                <Text>Save change</Text>
                            </Button>
                        </Body>
     
                    </CardItem>

                   

                </Content>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    Content: {
        backgroundColor: 'rgba(0, 0, 0,0.75)',
        
    },
    CardItem: {
        marginTop:20,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255,1.0)',
    },
    errormessage:{
        color: '#ff0000'
    },
    input: {
        height: 50,
        width:300,
        fontSize: 16,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        borderWidth: 2,
        marginBottom: 5,
        color: 'rgba(0,0,0, 1)',
        paddingHorizontal: 6
    },
    Text: {
        fontSize: 25,
        fontWeight: 'bold',
   },

})
