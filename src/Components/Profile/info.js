import React, { Component } from 'react';
import { Container, Header, Item, Input, Tab, Tabs, Text, ScrollableTab, Card, CardItem, Body, Thumbnail, Button, Icon,Right, Left, Content } from 'native-base';
import {
  StyleSheet,
  Image,
  View,
  AsyncStorage
} from 'react-native'

export default class infoProfile extends Component {
        constructor(props) {
        
        super(props)
        this.state = {
            username:'',
            firstname:'',
            lastname:'',
            password:'',
            birthdate:'',
            email:'',
            phone:'',
            role:'',
        }

        }

    async componentWillMount(){
        const token = await AsyncStorage.getItem('Auth');
        console.log(token);
        const url = '/api/users/getme'
        this._getUser(token, url).then((response) => {
                if (response.success) {
                    this.setState({
                        username : response.success.username,
                        password : response.success.password,
                        firstname : response.success.first_name,
                        lastname: response.success.last_name,
                        birthdate: response.success.birth_date,
                        email : response.success.email,
                        phone : response.success.phone,
                        role: response.success.role
                    })        
                } else if(response.error) {
                    console.log(' error ')
                }
        })
    }
    _getUser(token , target) {
		return fetch( DOMAIN+target, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Authorization': 'Bearer '+token
			}}).then((response) => response.json())   
		
	}    
    render() {
        return (
        <Container >
                <Content style={styles.Content}>

                        <CardItem style={styles.CardItem}>
                            <Body>
                                <Card style={styles.Card}>
                                    <Text style={styles.Textinline}>
                                        <Text style={styles.CardTextHeader}>Username : </Text>
                                        <Text style={styles.CardText}>{this.state.username}</Text>
                                    </Text>
                                </Card>
                                <Card style={styles.Card}>
                                    <Text style={styles.Textinline}>
                                        <Text style={styles.CardTextHeader}>Name : </Text>
                                        <Text style={styles.CardText}>{this.state.firstname} {this.state.lastname}</Text>
                                    </Text>
                                </Card>
                                <Card style={styles.Card}>
                                    <Text style={styles.Textinline}>
                                        <Text style={styles.CardTextHeader}>Birth date : </Text>
                                        <Text style={styles.CardText}> {this.state.birthdate}</Text>
                                    </Text>
                                </Card>
                                <Card style={styles.Card}>
                                    <Text style={styles.Textinline}>
                                        <Text style={styles.CardTextHeader}>Email : </Text>
                                        <Text style={styles.CardText}> {this.state.email}</Text>
                                    </Text>
                                </Card>
                                <Card style={styles.Card}>
                                    <Text style={styles.Textinline}>
                                        <Text style={styles.CardTextHeader}>Phone : </Text>
                                        <Text style={styles.CardText}> {this.state.phone}</Text>
                                    </Text>
                                </Card>
                                <Card style={styles.Card}>
                                    <Text style={styles.Textinline}>
                                        <Text style={styles.CardTextHeader} >Role : </Text>
                                        <Text style={styles.CardText}> {this.state.role}</Text>
                                    </Text>
                                </Card>
                            </Body>
                        </CardItem>

                </Content>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 20,
        opacity: 1
    },
    Content: {
        backgroundColor: 'rgba(0, 0, 0,0.8)',
        padding: 20
    },
    Card: {
        width: 325,
        marginBottom:5,
        padding:9,
        
    },
    CardItem: {
        marginTop:20,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255,1.0)',
    },
    Textinline: {
        marginBottom: 10 , 
    },
    CardTextHeader: {
         fontSize: 25,
         fontWeight: 'bold',
    },
    CardText: {
        fontSize: 20,

   },
    
})
