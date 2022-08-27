import { Dimensions, Modal, Pressable, TextInput, SafeAreaView, StyleSheet, TouchableWithoutFeedback, FlatList, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Recorder from './Recorder';
import LocationSearch from './LocationSearch';
import Accordian from './Accordian';
import DateTimePicker from './DatePicker';


const { width, height } = Dimensions.get('screen')

const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const grayTextTwo = '#6e6e6e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const orange = '#E05500'
const borderColor = '#7E7E7E'



const schedule = [
    {
        id: '00',
        title: 'Urgent',
        color: red,
    },
    {
        id: '02',
        title: 'Today',
        color: blue,
    },
    {
        id: '03',
        title: 'Schedule',
        color: green,
    },
];

const PayTypeData = [

    {
        id: '00',
        title: 'AMC',
    },
    {
        id: '01',
        title: 'Rate',
    },

];
const techniciansList = [
    {
        id: '00',
        label: 'Ritesh Timsina',
    },
    {
        id: '01',
        label: 'Prakash Sahsher',
    },
    {
        id: '02',
        label: 'Ritesh Timsina',
    },

];


const data = [

]


const AMCModal = ({ isOpen, onPress, navigation, onClose }) => {
    const [openAMC, setOpenAMC] = useState(isOpen);
    const toggleModal = () => {
        setOpenAMC(!openAMC)
    }



    return (
        <>
            <View style={{}}>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openAMC}
                >
                    <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', }}>

                        <View style={{
                            flex: 1,
                            backgroundColor: textColor, width: width,
                            padding: spacing * 2,
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: spacing * 2.5 }}>

                                <Text style={{ fontSize: 18, fontWeight: '600', color: colorOne, }}>Edit Task</Text>
                                <Pressable
                                    style={{ alignSelf: 'flex-end' }}
                                    onPress={() => onPress()}
                                >
                                    <IconM color={colorOne} name="cancel" size={25} />
                                </Pressable>

                            </View>





                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                                <Text style={{ color: green, fontSize: 16, fontWeight: '600', }}>Active</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Icon name="chatbox-ellipses-outline" size={22} style={{ color: grayText }} />
                                    <Icon name="call-outline" size={22} style={{ color: grayText, marginLeft: spacing * 2 }} />
                                    <Icon name="download-outline" size={22} style={{ color: grayText, marginLeft: spacing * 2 }} />
                                    <Icon name="add-circle-outline" size={22} style={{ color: grayText, marginLeft: spacing * 2 }} />
                                </View>
                            </View>

                            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: spacing * 2, }}>



                                <View style={{ backgroundColor: '#d6d6d6', padding: spacing * 2, borderRadius: 4, marginBottom: spacing * 2, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing, }}>
                                        <Text style={{ color: grayText, fontSize: 16, fontWeight: '600', width: '45%', }}>Active</Text>
                                        <Text style={{ color: grayText, fontSize: 16, }}>Yoga Pty Ltd</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '600' }}>Contact No.</Text>
                                        <Text style={{ color: grayText, fontSize: 16, }}>0415701345</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}></View>


                                </View>


                                <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginBottom: spacing * 2, }}>
                                    <Text style={{ color: red, fontSize: 16, fontWeight: '600', alignSelf: 'flex-start', marginBottom: spacing }}>Customer Details</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Customer Name</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Test Task One</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Customer Number</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>411094809384</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Customer Email</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Prakash Kandel</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Customer Address</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Kalimati,Kathmandu Nepal, 4600</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Landmark</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>400500</Text>
                                    </View>
                                </View>

                                <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginBottom: spacing * 2, }}>
                                    <Text style={{ color: red, fontSize: 16, fontWeight: '600', alignSelf: 'flex-start', marginBottom: spacing }}>Product Details</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Product Brand</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Cisco Tele</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Product Name</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Cisco AU</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Serial Number</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>S4546</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Service Amount</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>NA</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Under Warranty</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Yes</Text>
                                    </View>
                                </View>


                                <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginBottom: spacing * 2, }}>
                                    <Text style={{ color: red, fontSize: 16, fontWeight: '600', alignSelf: 'flex-start', marginBottom: spacing, }}>AMC Details</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5, }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Activation Date</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>09-08-2022</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>No . of Services</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>12</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Service Completed</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>2</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Reminder</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Normal</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Occurance</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Monthly</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5 }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Note</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Some notes..</Text>
                                    </View>
                                </View>




                                <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginBottom: spacing * 4, }}>
                                    <Text style={{ color: red, fontSize: 16, fontWeight: '600', alignSelf: 'flex-start', marginBottom: spacing, }}>Services Details</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .5, }}>
                                        <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Last Serviced</Text>
                                        <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>NA</Text>
                                    </View>

                                </View>

                            </ScrollView>


                        </View>
                    </View >
                </Modal >
            </View >


        </>
    )
}

export default AMCModal

const styles = StyleSheet.create({

    taskTitle: {
        padding: 14,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        fontSize: 18,
        position: 'relative',
    },
    taskTitleBadge: {

        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },
    scheduleBox: {
        padding: 8,
        paddingHorizontal: spacing * 2,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContentjustifyContent: 'center'
    },


})