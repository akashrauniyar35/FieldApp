import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Divider from '../../components/Divider'
import StripCalander from '../../components/StripCalander'
import SearchBar from '../../components/SearchBar'


import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import OpenTechAttendance from '../../components/OpenTechAttendance'




const { width, height } = Dimensions.get('screen')
const w = width * .95;
const colorOne = '#01151A';
const spacing = 10;
const grayText = '#2e2e2e'
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const black = '#505D6D'
const greenOne = '#2BD9C5'
const textColor = '#7e7e7e';


const attendanceData = [
    {
        id: '00',
        name: "Prakash Kandel"
    },
    {
        id: '01',
        name: "Milan Sharma"
    },
    {
        id: '02',
        name: "Kapil Thapa"
    },
]







const Attendance = ({ navigation }) => {
    const [searchVisible, setSearchVisible] = useState(false)
    const [openAttendanceModal, setOpenAttendanceModal] = useState(false);



    const OpenTechModal = () => {
        setOpenAttendanceModal(!openAttendanceModal)
    }


    const TechCard = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => OpenTechModal()}>
                <View style={{ backgroundColor: 'white', paddingBottom: spacing, paddingHorizontal: spacing * 2, paddingVertical: spacing, marginBottom: spacing * 2, borderRadius: spacing / 2, shadowColor: grayText, shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { width: 1, height: 2 } }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/668/premium/668709.png?token=exp=1660288243~hmac=7dd1253a9768517cea64c2f5552a652d' }} style={{ width: 30, height: 30, borderRadius: 100 }} />
                            <Text style={{ fontSize: 16, fontWeight: '600', color: grayText, marginLeft: spacing * 2 }}>Prakash Kandel</Text>
                        </View>
                        <Icon name="checkmark-circle-outline" size={28} color={redOne} />

                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }






    // console.log('Attebd', navigation)
    return (
        <View>
            <SafeAreaView style={{ backgroundColor: colorOne }} />
            <Header nav={navigation} />
            <Divider width={width} color='white' />


            <View style={{}}>
                <StripCalander />
            </View>

            <View style={{ marginTop: spacing * 8, marginHorizontal: spacing }}>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: spacing }}>
                    <View style={{ padding: spacing, borderColor: greenOne, borderWidth: 1.5, borderRadius: spacing, width: '30%' }}>
                        <Text style={{ fontSize: 48, fontWeight: '600', color: greenOne }}>20</Text>
                        <Text style={{ fontSize: 16, color: textColor }}>Present</Text>
                    </View>
                    <View style={{ padding: spacing, borderColor: 'orange', borderWidth: 1.5, borderRadius: spacing, width: '30%' }}>
                        <Text style={{ fontSize: 48, fontWeight: '600', color: 'orange' }}>5</Text>
                        <Text style={{ fontSize: 16, color: textColor }}>Idle</Text>
                    </View>
                    <View style={{ padding: spacing, borderColor: redOne, borderWidth: 1.5, borderRadius: spacing, width: '30%' }}>
                        <Text style={{ fontSize: 48, fontWeight: '600', color: redOne }}>10</Text>
                        <Text style={{ fontSize: 16, color: textColor }}>Absent</Text>
                    </View>
                </View>

                <SearchBar isOpen={searchVisible} />




            </View>

            <FlatList data={attendanceData} keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: spacing, marginTop: spacing }}
                renderItem={(item) => (<TechCard item={item} />)}
            />





            {
                openAttendanceModal ? <OpenTechAttendance isOpen={openAttendanceModal} onPress={OpenTechModal} onClose={OpenTechModal} /> : null
            }


        </View>
    )
}

export default Attendance

const styles = StyleSheet.create({})