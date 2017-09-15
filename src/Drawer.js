/* @flow */

import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SideBar from './Components/Sidebar';
import Home from './Components/Home'
import Dev from './Components/Dev'
import Profile from './Components/Profile'

const Drawer = DrawerNavigator(
    {
        Dev: { screen: Dev },
        Home: { screen: Home },
        userprofile: { screen: Profile },
        
    },
    {
        initialRouteName: "Home",
        drawerWidth: 320,
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

export default Drawer;
