import React, { Component } from 'react';
import { Container, Header, Item, Input, Tab, Tabs, Text, ScrollableTab, Card, CardItem, Body, Thumbnail, Button, Icon, Left, Content } from 'native-base';
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

const tabContent = () => (
    <Content style={{ padding: 5, 	backgroundColor: '#E8E8E8'}}>
         <Image source={{uri: 'https://www.freewebheaders.com/wordpress/wp-content/gallery/computer/computer-and-office-business-header.jpg'}}
            style={styles.backdrop}
         >
            <View style={styles.backdropView}>
                <Text style={styles.headline}>COMPUTERS & LAPTOPS</Text>
            </View>
         </Image>
        <Card style={{flex: 0}}>
            <CardItem>
                <View style={{flex: 1, flexDirection: 'row' }}>
                    <View style={{width: 70, height: 70, marginRight: 10, alignItems: 'center' }} >
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://img3.stockfresh.com/files/b/broker/m/78/203649_stock-photo-modern-laptop-computer.jpg'}} />
                        <Text style={{ fontSize: 8, marginTop: 5 }}>Computers</Text>
                    </View>
                    <View style={{width: 70, height: 70, marginRight: 10, alignItems: 'center' }} >
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://previews.123rf.com/images/iserg/iserg1203/iserg120300001/12583223-usb-flash-drive-on-white-background-Isolated-3D-image-Stock-Photo.jpg'}} />
                        <Text style={{ fontSize: 8, marginTop: 5 }}>Flash drives</Text>
                    </View>
                    <View style={{width: 70, height: 70, marginRight: 10, alignItems: 'center' }} >
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2067625.jpg'}} />
                        <Text style={{ fontSize: 8, marginTop: 5 }}>Keyboards</Text>
                    </View>
                    <View style={{width: 70, height: 70, marginRight: 10, alignItems: 'center' }} >
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://static7.depositphotos.com/1000528/734/i/950/depositphotos_7341630-stock-photo-computer-lcd-monitor-isolated-on.jpg'}} />
                        <Text style={{ fontSize: 8, marginTop: 5 }}>Monitors</Text>
                    </View>
                    <View style={{width: 70, height: 70, marginRight: 10, alignItems: 'center' }} >
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://www.colourbox.com/preview/3442042-black-computer-mouse-on-a-white-background.jpg'}} />
                        <Text style={{ fontSize: 8, marginTop: 5 }}>Mouses</Text>
                    </View>
                </View>
            </CardItem>
        </Card>
        <Text style={{ paddingTop: 5, paddingBottom: 5, fontSize: 12 }}>Shop by Category</Text>
        <Card style={{flex: 0}}>
            <CardItem>
                <Left>
                    <Image style={{ height: 100, width: 100 }}  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Pink_Birkin_bag.jpg' }} />
                    <Body style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: 12, paddingBottom: 5 }}>Hair ไมโครเวฟ ขนาด 20 ลิตร รุ่น HMWO-20MX74-L</Text>
                        <Text style={{ fontSize: 12, color: '#F00', paddingBottom: 5  }}>2,290.00 ฿</Text>
                        <Text style={{ fontSize: 12, paddingBottom: 5  }} note>April 15, 2016</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>

        <Card style={{flex: 0}}>
            <CardItem>
                <Left>
                    <Image style={{ height: 100, width: 100 }}  source={{ uri: 'https://previews.123rf.com/images/winnond/winnond1111/winnond111100007/11272256-pink-plastic-bag-on-white-background-Stock-Photo.jpg' }} />
                    <Body style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: 12, paddingBottom: 5 }}>Merc Gears กระเป๋าเป้ ผู้ชาย สะพายหลัง สีดำ-เหลือง </Text>
                        <Text style={{ fontSize: 12, color: '#F00', paddingBottom: 5  }}>189 ฿</Text>
                        <Text style={{ fontSize: 12, paddingBottom: 5  }} note>April 15, 2016</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>

        <Card style={{flex: 0}}>
            <CardItem>
                <Left>
                    <Image style={{ height: 100, width: 100 }}  source={{ uri: 'https://previews.123rf.com/images/homy_design/homy_design1208/homy_design120800322/14876519-Leather-keychain-red-bag-miniature-isolated-on-white-background--Stock-Photo.jpg' }} />
                    <Body style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: 12, paddingBottom: 5 }}>กระเป๋าเป้เด็ก Mickey Mouse สิขสิทธิ์แท้จาก Disney  </Text>
                        <Text style={{ fontSize: 12, color: '#F00', paddingBottom: 5  }}>189 ฿</Text>
                        <Text style={{ fontSize: 12, paddingBottom: 5  }} note>April 15, 2016</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>

        <Card style={{flex: 0}}>
            <CardItem>
                <Left>
                    <Image style={{ height: 100, width: 100 }}  source={{ uri: 'https://thumbs.dreamstime.com/z/brown-sackcloth-bag-white-background-isolated-30731716.jpg' }} />
                    <Body style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: 12, paddingBottom: 5 }}>Marino กระเป๋าเป้สะพายหลัง รุ่น A0171 - Baoblue  </Text>
                        <Text style={{ fontSize: 12, color: '#F00', paddingBottom: 5  }}>189 ฿</Text>
                        <Text style={{ fontSize: 12, paddingBottom: 5  }} note>April 15, 2016</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    </Content>
)
export default class Dev extends Component {
    static navigationOptions = {
        // title: 'Welcome',
        header: null
    }
    render() {
        return (
        <Container >
            <Header searchBar rounded>
                <Item>
                    <Icon active name="search" />
                    <Input placeholder="Search" />
                    <Icon active name="people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Tabs renderTabBar={()=> <ScrollableTab />}>
                <Tab heading="Highlight">
                    { tabContent() }
                </Tab>
                <Tab heading="Health & Beauty">
                    { tabContent() }
                </Tab>
                <Tab heading="Fashion">
                    { tabContent() }
                </Tab>
                <Tab heading="Electronics">
                    { tabContent() }
                </Tab>
                <Tab heading="Home & Living">
                    { tabContent() }
                </Tab>
            </Tabs>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3498db'
    },
    backdrop: {
        height: 100,
        width: null,
        flex: 1
    },
    backdropView: {
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
    },
    headline: {
        fontSize: 20,
        marginLeft: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        fontSize: 15
    }
})
