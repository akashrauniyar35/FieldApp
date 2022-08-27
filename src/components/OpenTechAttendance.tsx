import { Alert, Dimensions, FlatList, Modal, Pressable, StyleSheet, Image, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import Divider from './Divider';


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
const textColorOne = '#7e7e7e';

const OpenTechAttendance = ({ isOpen, onPress, onClose }: any) => {



    const [visible, setVisible] = useState(isOpen);
    const [selected, setSelected] = useState('');
    console.log('isOPne', isOpen, 'visible', visible)



    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <View style={{ backgroundColor: 'white', position: 'relative' }}>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={visible}
                >
                    <View style={{}}>
                        <View style={{
                            backgroundColor: 'white', width: width, borderRadius: 14, padding: spacing, alignSelf: 'center',
                            alignItems: 'center', justifyContent: 'center', shadowRadius: 20, shadowColor: 'gray', shadowOpacity: 1, shadowOffset: { width: 2, height: 5 }
                        }}>
                        </View>
                    </View >

                    {/* <SafeAreaView /> */}
                    <View style={{ backgroundColor: 'white', paddingBottom: spacing, paddingHorizontal: spacing * 2, paddingTop: spacing * 4 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/668/premium/668709.png?token=exp=1660288243~hmac=7dd1253a9768517cea64c2f5552a652d' }} style={{ width: 30, height: 30, borderRadius: 100 }} />
                                <View style={{}}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: grayText, marginLeft: spacing * 2 }}>Prakash Kandel</Text>
                                    <Text style={{ fontSize: 12, color: textColorOne, marginLeft: spacing * 2 }}>Technician</Text>
                                </View>
                            </View>
                            <Icon name="call-outline" size={22} color={grayText} />
                        </View>


                    </View>

                    <View style={{ backgroundColor: 'white', }}>
                        <Divider width={width} color={grayText} />
                    </View>

                    <View style={{ backgroundColor: 'white', paddingHorizontal: spacing * 2, padding: spacing }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '40%', }}>
                                <Text style={{ fontSize: 12, color: grayText }}>-NA-</Text>
                            </View>
                            <View style={{ width: '60%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 12, color: grayText, width: '40%' }}>CheckIn</Text>
                                    <Text style={{ fontSize: 12, color: grayText, marginHorizontal: spacing }}>:</Text>
                                    <Text style={{ fontSize: 12, color: grayText, }}>NA</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 12, color: grayText, width: '40%' }}>CheckOut</Text>
                                    <Text style={{ fontSize: 12, color: grayText, marginHorizontal: spacing }}>:</Text>
                                    <Text style={{ fontSize: 12, color: grayText, }}>NA</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing * 2, paddingBottom: spacing }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: spacing, backgroundColor: redOne, padding: spacing * 1, borderRadius: 8 }}>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 12, marginBottom: spacing, }}>Total Absent</Text>
                            <Text style={{ color: 'white', fontSize: 22 }}>12</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: spacing, backgroundColor: greenOne, padding: spacing * 1, borderRadius: 8 }}>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 12, marginBottom: spacing, }}>Total Present</Text>
                            <Text style={{ color: 'white', fontSize: 22 }}>20</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: spacing, backgroundColor: yellow, padding: spacing * 1, borderRadius: 8 }}>
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', marginBottom: spacing, }}>Total Idle</Text>
                            <Text style={{ color: 'white', fontSize: 22 }}>0</Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <View style={{ alignItems: 'center', backgroundColor: textColor }}>
                            <CalendarList
                                // style={{ padding: 0, backgroundColor: 'white', marginLeft: -spacing }}

                                theme={{
                                    textSectionTitleColor: 'white',
                                    monthTextColor: 'white',
                                    textMonthFontWeight: '700',
                                    textDisabledColor: textColorOne,
                                }}

                                style={{
                                    // paddingHorizontal: width * .3,
                                    width: width * 1,
                                    backgroundColor: 'white',
                                    // marginRight: spacing * 6,
                                    overflow: 'hidden',

                                }}
                                horizontal={true}
                                pagingEnabled={true}
                                calendarWidth={width * 1}

                                headerStyle={{ backgroundColor: colorOne, width: width * 1, marginLeft: -spacing * 1.5, }}
                                // ListHeaderComponent={{}}



                                pagingEnabled={true}


                                // Collection of dates that have to be marked. Default = { }
                                markedDates={{
                                    '2022-08-15': { disabled: true, disableTouchEvent: true },
                                    '2022-08-16': { selected: true, selectedColor: colorOne },
                                    '2022-08-17': { marked: true, dotColor: greenOne, },
                                    '2022-08-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                                    '2022-08-19': { disabled: true, disableTouchEvent: true }
                                }}
                            />


                        </View>

                    </View>



                    <View style={{ position: 'absolute', bottom: spacing * 4, alignSelf: 'center', }}>
                        <Pressable
                            style={{ alignSelf: 'center' }}
                            onPress={onClose}
                        >

                            <View style={{ backgroundColor: colorOne, alignItems: 'center', justifyContent: 'center', padding: spacing, borderRadius: 4, width: width * .9 }}>
                                <Text style={{ color: 'white', fontSize: 18 }}>Close</Text>
                            </View>

                            {/* <IconM color={colorOne} name="cancel" size={25} /> */}
                        </Pressable>
                    </View>


                </Modal >

            </View>




        </>
    )
}

export default OpenTechAttendance

const styles = StyleSheet.create({

    dayTextAtIndex0: {
        color: 'red'
    },
    dayTextAtIndex6: {
        color: 'blue'
    }

})