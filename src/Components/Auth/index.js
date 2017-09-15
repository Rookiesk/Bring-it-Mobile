import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { Container, Icon, Text, Button, Footer, FooterTab, Tabs, Tab, Content } from 'native-base';
import SplashScreen from 'react-native-splash-screen'
import { NavigationActions } from 'react-navigation'

import Login from './screen/loginform';
import Register from './screen/registerform'

var indexstack = 0 ;

export default class Auth extends Component {
    
    constructor(props) {
        super(props)
        this.state = {index: 0} // default screen index
    }

   switchScreen(index) {
        this.setState({index: index})
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


    render() {

      let AppComponent = null ;
      let status1 = "active"
      let status2 = null
    if (this.state.index == 0) {
            AppComponent = Login
            status1 = "active"
        }  
    else if(this.state.index == 1)  {
            AppComponent = Register
            status2 = "active"
        } 
    
    

        return (

/*          <Container>
                <AppComponent/> 
           <Footer>
               <FooterTab>
                    <Button onPress={() => this.switchScreen(0) }> Login </Button>
                    <Button onPress={() => this.switchScreen(1) }> Register </Button>
               </FooterTab>
           </Footer>
         </Container> */

            <Container>
              
                <AppComponent/> 
                   
      
                        <Footer style={styles.footer}>
                            <FooterTab>
                                <Button onPress={() => this.switchScreen(0)}>
                                    <Text> Login </Text>
                                </Button>
                                <Button onPress={() => this.switchScreen(1)}>
                                    <Text> Register </Text>
                                </Button>
                            </FooterTab>
                        </Footer>
      
             </Container> 
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        position: 'relative',
        flex:0.1,
        bottom: 0,
    },
})