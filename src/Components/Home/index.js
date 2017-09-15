import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import store from 'react-native-simple-store';

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Left, Right, Body, Segment, Tabs, Tab, TabHeading, SwipeRow, Text, CardItem, Card, Thumbnail } from 'native-base';

export default class Home extends Component {
    constructor(props) {
        super(props)

    }
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                   
                    <Body style={styles.bodyContainer}>
                        <Text style={styles.title}>
                            Home
                        </Text>
                    </Body>
                  
                    <Right style={{flex: 1}}>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Right>
                
                </Header>

                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="md-apps" /><Text>App</Text></TabHeading>}>
                        <Text> Homepage Tab 1 </Text>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="md-basket" /><Text>Cart</Text></TabHeading>}>
                        <Text> Homepage Tab 2 </Text>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="md-compass" /><Text>Map</Text></TabHeading>}>
                        <Text> Homepage Tab 3 </Text>
                    </Tab>
                </Tabs>
                
            <Content />
            {/* <Footer>
                <FooterTab>
                    <Button>
                        <Icon name="apps" />
                    </Button>
                    <Button>
                        <Icon name="camera" />
                    </Button>
                    <Button active>
                        <Icon active name="navigate" />
                    </Button>
                    <Button>
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer> */}
        </Container>
        )
    }
}
const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 20,
        opacity: 1
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})