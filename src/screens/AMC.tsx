import { Dimensions, SafeAreaView, StyleSheet, Text, View, Animated, StatusBar } from 'react-native'
import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Divider from '../components/Divider'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMN from 'react-native-vector-icons/MaterialCommunityIcons';
import TaskCard from '../components/TaskCard';
import AMCcard from '../components/AMCcard';
import AMCModal from '../components/AMCModalOpen';


const colorOne = '#01151A';
const spacing = 10;
const textColor = 'white';
const grayText = '#2e2e2e'
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const black = '#505D6D'
const greenOne = '#2BD9C5'
const { width, height } = Dimensions.get('screen')
const w = width * .95;
const AMC = ({ navigation }) => {
    const [statusEnabled, setStatusEnabled] = useState(false);
    const [openAMC, setOpenAMC] = useState(false);



    const onPress = () => {
        setOpenAMC(!openAMC);
    }

    return (
        <View>

            <SafeAreaView style={{ backgroundColor: colorOne }} />
            <Header nav={navigation} />
            <Divider width={width} color='white' />

            <View style={{ backgroundColor: colorOne, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'center', width: w, paddingVertical: spacing * 1.5 }}>

                    <View style={{ borderBottomWidth: 2, borderColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 5 }}>
                        <Text style={{ color: textColor, fontSize: 14, }}>AMC Type</Text>
                        <Icon color={textColor} style={{ marginLeft: 10 }} name={statusEnabled ? "chevron-up" : "chevron-down"} size={20} onPress={() => setStatusEnabled(!statusEnabled)} />
                    </View>

                    <View style={{ borderBottomWidth: 2, marginLeft: spacing * 8, borderColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 5 }}>
                        <Text style={{ color: textColor, fontSize: 14, }}>Jul 2022</Text>
                        <Icon color={textColor} style={{ marginLeft: 10 }} name="chevron-down" size={20} />
                    </View>
                </View>
            </View>

            <View style={{ marginVertical: spacing, }}>
                <AMCcard nav={navigation} onPress={onPress} />

                {
                    openAMC && <AMCModal navigation={navigation} isOpen={openAMC} onPress={onPress} onClose={onPress} />
                }

            </View>


        </View>
    )
}

export default AMC

const styles = StyleSheet.create({})