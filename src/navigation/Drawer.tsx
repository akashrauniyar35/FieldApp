import React from "react";

import { createDrawerNavigator, } from '@react-navigation/drawer';
import Home from "../screens/Home";
import Task from "../screens/TaskScreens/Task";
import Crm from "../screens/Crm";
import Other from "../screens/AMC";

import BottomTabsNavigator from './BottomTabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from "react-native";
import CustomDrawer from "../components/CustomDrawer";
import ItemInventory from "../screens/DrawerScreens/ItemInventory";
import Attendance from "../screens/DrawerScreens/Attendance";
import Expenditure from "../screens/DrawerScreens/Expenditure";
import TechnicianList from "../screens/DrawerScreens/TechnicianList";


const Drawer = createDrawerNavigator();


function LogoTitle() {
    return (
        <Image
            style={{ width: 10, height: 10 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2922/2922510.png' }}
        />
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false, drawerPosition: 'right', }}>
            <Drawer.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} options={{ headerShown: false, }} />
            <Drawer.Screen name="ItemInventory" component={ItemInventory} options={{ headerShown: false, }} />
            <Drawer.Screen name="Crm" component={Crm} options={{ headerShown: false, }} />
            <Drawer.Screen name="Attendance" component={Attendance} options={{ headerShown: false, }} />
            <Drawer.Screen name="Expenditure" component={Expenditure} options={{ headerShown: false, }} />
            <Drawer.Screen name="TechnicianList" component={TechnicianList} options={{ headerShown: false, }} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;