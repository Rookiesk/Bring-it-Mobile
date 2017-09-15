import React, { Component } from 'react';
import { Container, Header, Item, Input, Tab, Tabs, Text, ScrollableTab, Card, CardItem, Body, Thumbnail, Button, Icon,Right,Footer,FooterTab, Left, Content } from 'native-base';
import {
  StyleSheet,
  Image,
  View,
  AsyncStorage
} from 'react-native'

import infoProfile from './info';
import editProfile from './edit';

export default class Profile extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            index:0
        }

    }
    static navigationOptions = {
        header: null
    }
	
    switchScreen(index) {
        this.setState({index: index})
    } 
    render() {
        let AppComponent = null ;
        let status1 = "active"
        let status2 = null
        if (this.state.index == 0) {
                AppComponent = infoProfile
                status1 = "active"
            }  
        else if(this.state.index == 1)  {
                AppComponent = editProfile
                status2 = "active"
            } 
        return (
        <Container >
                <Header>
                    <Body>
                        <Text style={styles.title}>
                            Profile
                        </Text>
                    </Body>

                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Right>
                </Header>

                        <AppComponent/> 
                    <Footer style={styles.footer}>
                        <FooterTab>
                            <Button onPress={() => this.switchScreen(0)}>
                                <Text style={styles.text}> information </Text>
                            </Button>
                            <Button onPress={() => this.switchScreen(1)}>
                                <Text style={styles.text}> edit </Text>
                            </Button>
                        </FooterTab>
                    </Footer>
            
              

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
        backgroundColor: '#FFF',
        padding: 20
    },
    text: {
        fontSize: 15,
    },
    CardItem: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    Textinline: {
        marginBottom: 10 , 
    },
    CardTextHeader: {
         color: "#000", 
         fontSize: 25,
         fontWeight: 'bold',
    },
    
})
