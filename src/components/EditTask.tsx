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


const EditTask = ({ isOpen, onPress, navigation, }) => {

    const [visible, setVisible] = useState(isOpen);
    const [priority, setPriority] = useState();
    const [selectTech, setSelectTech] = useState(false)
    const [AMC, setAMC] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState();


    const [pickDate, setPickDate] = useState(false);
    const [pickTime, setPickTime] = useState(false);

    // console.log('this is priority', priority)

    const Scheduler = () => {
        return (
            <View style={{}}>
                <FlatList
                    horizontal
                    contentContainerStyle={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
                    data={schedule}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => setPriority(item.title)}>

                                <View style={[styles.scheduleBox, {
                                    transform: priority == item.title ? [{ scale: 1.4, }] : [{ scale: 1 }], borderWidth: 1,
                                    borderColor: item.color, backgroundColor: priority == item.title ? item.color : 'white', borderRadius: priority == item.title ? 10 : 5
                                }]}>
                                    <Text style={{ color: priority == item.title ? textColor : grayText, fontWeight: '700' }}>{item.title}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                    } />

            </View >
        )
    };


    const selectTechnician = () => {
        setSelectTech(!selectTech);
    }


    return (
        <>
            <View style={{}}>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
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




                            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always'>

                                <View style={{ marginVertical: spacing * 2 }}>
                                    <TextInput
                                        style={styles.taskTitle}
                                        // onChangeText={onChangeNumber}
                                        // value={number}
                                        placeholderTextColor={grayText}
                                        placeholder="Fan Fix Burwood"
                                    />
                                    <View style={styles.taskTitleBadge}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Task Title *</Text></View>
                                </View>


                                <View style={{ marginBottom: spacing * 2 }}>
                                    <Scheduler />
                                </View>





                                <View style={{ marginBottom: spacing * 2 }}>

                                    {<DateTimePicker />}

                                </View>


                                <View style={{ marginBottom: spacing * 2 }}>
                                    <TextInput
                                        style={[styles.taskTitle, {}]}
                                        // onChangeText={onChangeNumber}
                                        // value={number}
                                        placeholderTextColor={grayText}
                                        placeholder="Bhagwati Pty Ltd"
                                    />
                                    <View style={[styles.taskTitleBadge, {}]}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Company Name *</Text></View>
                                </View>

                                <View style={{ marginBottom: spacing * 2 }}>
                                    <TextInput
                                        style={[styles.taskTitle, {}]}
                                        // onChangeText={onChangeNumber}
                                        // value={number}
                                        placeholderTextColor={grayText}
                                        placeholder="Bhagwati Pty Ltd"
                                    />
                                    <View style={[styles.taskTitleBadge, {}]}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Company Name *</Text></View>
                                </View>

                                <View style={{ marginBottom: spacing * 2 }}>
                                    <TextInput
                                        style={[styles.taskTitle, {}]}
                                        // onChangeText={onChangeNumber}
                                        placeholderTextColor={grayText}
                                        placeholder="0415701654"
                                    />
                                    <View style={[styles.taskTitleBadge, {}]}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Customer Number *</Text></View>
                                </View>

                                <View style={{ marginBottom: spacing * 2 }}>
                                    <LocationSearch />
                                </View>




                                <View style={{ marginBottom: spacing * 2 }}><Accordian isOpen={selectTech} title={'Select Techn'} data={techniciansList} onPress={selectTechnician} /></View>



                                <View style={{ marginBottom: spacing * 2 }}>
                                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: w * .35, backgroundColor: 'white', borderRadius: 4, borderWidth: 1.5, borderColor: borderColor }}>

                                            <FlatList
                                                horizontal
                                                contentContainerStyle={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
                                                data={PayTypeData}
                                                keyExtractor={(item) => item.id}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <TouchableWithoutFeedback onPress={() => setPaymentMethod(item.title)}>
                                                            <View style={{ backgroundColor: paymentMethod == item.title ? colorOne : textColor, padding: 15, }}>
                                                                <Text style={{ color: paymentMethod == item.title ? textColor : grayText, fontWeight: '600', fontSize: 16, }}>{item.title}</Text>
                                                            </View>
                                                        </TouchableWithoutFeedback>
                                                    )
                                                }
                                                } />

                                        </View>

                                        <View style={{}}>
                                            <TextInput
                                                style={[styles.taskTitle, { width: w * .55, }]}
                                                // onChangeText={onChangeNumber}
                                                placeholderTextColor={grayText}
                                                placeholder=""
                                            />
                                            <View style={[styles.taskTitleBadge, {}]}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Please Enter Amount *</Text></View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ marginBottom: spacing * 2 }}>

                                    <Recorder />
                                </View>



                                <TouchableWithoutFeedback onPress={() => navigation.navigate('locationSearch')}>
                                    <View style={{ backgroundColor: colorOne, marginBottom: spacing * 2, borderRadius: 5, padding: 14, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: textColor, fontSize: 16, fontWeight: '600' }}>UPDATE</Text>
                                    </View>
                                </TouchableWithoutFeedback>


                            </ScrollView>

                        </View>
                    </View >
                </Modal >
            </View >


        </>
    )
}

export default EditTask

const styles = StyleSheet.create({

    taskTitle: {
        placeHolderFontSize: 14,
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