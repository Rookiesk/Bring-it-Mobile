import React, { Component } from 'react';
import { Image, AsyncStorage, Alert } from 'react-native';
 // import store from 'react-native-simple-store';
import { NavigationActions } from 'react-navigation'
import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
	Footer,
} from "native-base";

import styles from "./style";

const drawerCover = require("../../../img/drawer-cover.png");

const datas = [
	{
		name: "Home",
		route: "Home",
		icon: "easel",
		bg: "#C5F442",
	},
	{
		name: "Profile",
		route: "userprofile",
		icon: "easel",
		bg: "#C5F442",
	},
	
	// {
	// 	name: "Dev",
	// 	route: "Dev",
	// 	icon: "easel",
	// 	bg: "#C5F442",
	// },
	
];

class SideBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
			firstname:'',
			lastname:'',
			role:''

		}
	}
	async componentWillMount(){
		const token = await AsyncStorage.getItem('Auth');
		console.log(token);
		const url = '/api/users/getme'
		this._getUser(token, url).then((response) => {
                 if (response.success) {
					this.setState({
						firstname : response.success.first_name,
						lastname: response.success.last_name,
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
	async _userLogout() {
			await AsyncStorage.removeItem('Auth').then(() => {
			Alert.alert("Logout Success!");
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Auth'})
                ]
            })
            this.props.navigation.dispatch(resetAction)
        })
}    
	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
						<Container style={styles.drawerheadContainer}>
							<Text style={styles.drawerheadText1} >{this.state.firstname} {this.state.lastname}</Text>
							<Text style={styles.drawerheadText2} >{this.state.role}</Text>
						</Container>
						{/* <Image square style={styles.drawerImage} source={drawerImage} /> */}
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
							<ListItem button noBorder onPress={() => this._userLogout()}>
								<Left>
									<Icon active name={"easel"} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										Logout
									</Text>
								</Left>
							</ListItem>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
