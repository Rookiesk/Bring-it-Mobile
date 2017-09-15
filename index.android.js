import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native'

import { StackNavigator } from 'react-navigation'

// import axios from 'axios'
// import store from 'react-native-simple-store'

import Auth from './src/Components/Auth/Login'
import Login from './src/Components/Auth/screen/loginform'
import Register from './src/Components/Auth/Register'
import Splash from './src/Components/Splash'
import Home from './src/Components/Home'
import Profile from './src/Components/Profile'
import Drawer from './src/Drawer'
import Dev from './src/Components/Dev'

global: DOMAIN = 'http://192.168.8.2'
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });


// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Do something with response data
//     return response;
// }, function (error) {
//     // Do something with response error
//     if (error.response.status === 401 || error.response.status === 403) {
//         console.log('permission denied')
//     }
//     return Promise.reject(error);
//   });


const SimpleApp = StackNavigator({
    Drawer: { screen: Drawer },
    Dev: { screen: Dev },
    Splash: { screen: Splash },
    Auth: { screen: Auth },
    Login: { screen: Login },
    Register: { screen: Register },
    Home: { screen: Home },
    userprofile:{ screen: Profile }
},
{
    initialRouteName: "Splash",
    headerMode: "none",
})

AppRegistry.registerComponent('reactTutorialApp', () => SimpleApp)
