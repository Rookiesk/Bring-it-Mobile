import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image
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
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Segment>
                            <Button first><Text>Puppies</Text></Button>
                            <Button last active><Text>Cubs</Text></Button>
                        </Segment>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                        <Text> Tab 1 </Text>
                    </Tab>
                    <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                        <Text> Tab 2 </Text>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                        <Text> Tab 3 </Text>
                    </Tab>
                </Tabs>
                <SwipeRow
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    left={
                        <Button success onPress={() => alert('Add')}>
                            <Icon active name="add" />
                        </Button>
                    }
                    body={
                        <View>
                            <Text>SwipeRow Body Text</Text>
                        </View>
                    }
                    right={
                        <Button danger onPress={() => alert('Trash')}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
                <Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'Image URL'}} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11 ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Card>
            <Content />
            <Footer>
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
            </Footer>
        </Container>
        )
    }
}
