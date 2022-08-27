import React from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'


import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from './Divider';


const { width, height } = Dimensions.get('screen')
const w = width * .95;
const colorOne = '#01151A';
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const textColor = '#7e7e7e';
const grayText = '#2e2e2e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const taskIDColor = '#0066cc'
const bg = 'white'



const drawerLists = [
]


const CustomDrawer = (props) => {
    console.log(props)


    const DrawerLabel = ({ label, icon, navigateTo }) => {
        return (
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate(navigateTo)}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: spacing * 3, marginBottom: spacing * 2, }}>
                    <IconM name={icon} size={28} color={"#1e1e1e"} />
                    <Text style={{ marginLeft: spacing * 2, fontSize: 18, color: grayText }}>{label}</Text>
                </View>
            </TouchableWithoutFeedback >
        )
    }
    const DrawerBottomLabel = ({ label, icon }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: spacing * 3.5, marginBottom: spacing * 2, }}>
                <IconM name={icon} size={22} color={"#1e1e1e"} />
                <Text style={{ marginLeft: spacing * 2, fontSize: 16, color: grayText }}>{label}</Text>
            </View>
        )
    }



    const DrawerHeader = ({ }) => {
        return (
            <View style={{ padding: spacing, paddingHorizontal: spacing * 2, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#caf1de', padding: 4, width: 45, height: 45, alignItems: 'center', justifyContent: 'center', position: 'relative', borderRadius: 100 }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2922/2922510.png' }} style={{ width: 35, height: 35 }} />

                    <TouchableWithoutFeedback>
                        <IconM name='pencil-circle' size={22} color={colorOne} style={{ position: 'absolute', bottom: -5, right: -5, }} />
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ marginLeft: spacing * 2 }}>
                    <Text style={{ fontSize: 18, color: grayText, fontWeight: '600' }}>First Last Name</Text>
                    <Text style={{ color: red }}>email@gmail.com</Text>
                </View>
            </View>
        )
    }
    const DrawerFooter = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colorOne, padding: spacing, paddingHorizontal: spacing * 2, }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', }}>Logout</Text>
                <Icon name="log-out-outline" size={22} color={'white'} />
            </View>
        )
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <SafeAreaView />

                <DrawerHeader />


                <View style={{ marginTop: spacing * 2 }}>


                    <DrawerLabel icon={"view-dashboard-variant-outline"} label={"Dashboard"} navigateTo={"BottomTabsNavigator"} />



                    <DrawerLabel icon="cube-outline" label="Item Inventory" navigateTo={"ItemInventory"} />


                    <TouchableWithoutFeedback >
                        <DrawerLabel icon="currency-inr" label="Expenditure" navigateTo={"Expenditure"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback >
                        <DrawerLabel icon="calendar-outline" label="Attendance" navigateTo={"Attendance"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback >
                        <DrawerLabel icon={"account-group-outline"} label="Technician List" navigateTo={"TechnicianList"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback >
                        <DrawerLabel icon="notebook-outline" label="Passbook" />
                    </TouchableWithoutFeedback>
                </View>

                <Divider width={'80%'} color={textColor} />


                <View style={{ marginTop: spacing * 2 }}>


                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"lifebuoy"} label={"Help & Support"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"cog-outline"} label={"Settings"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"information-outline"} label={"About"} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate("AMC")}>
                        <DrawerBottomLabel icon={"handshake-outline"} label={"Invite Friends"} />
                    </TouchableWithoutFeedback>


                </View>


            </View >

            <DrawerFooter />
            <SafeAreaView />
        </>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})