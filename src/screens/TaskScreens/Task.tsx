import { SafeAreaView, StyleSheet, Text, Dimensions, View, Modal, ImageBackground, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import TaskCard from '../../components/TaskCard'
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import CommonModal from '../../components/CommonModal';
import SearchBar from '../../components/SearchBar';



const { width, height } = Dimensions.get('screen')

const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const orange = '#E05500'





const statusData = [
    {
        id: '00',
        title: 'Today',
    },
    {
        id: '01',
        title: 'Week',
    },
    {
        id: '02',
        title: 'Month',
    },
    {
        id: '04',
        title: 'Year',
    },
]


const Task = ({ navigation }) => {
    const [statusEnabled, setStatusEnabled] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false)




    const showOptions = () => {
        setStatusEnabled(!statusEnabled)

    }

    const StatusOptions = () => {
        return (
            <View style={{}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    // presentationStyle="formSheet"
                    visible={statusEnabled}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setStatusEnabled(!statusEnabled);
                    }}
                >

                    <View style={{ top: height * .4, }}>
                        <View style={{
                            backgroundColor: 'white', width: w * .4, borderRadius: 5, padding: spacing, alignSelf: 'center',
                            alignItems: 'center', justifyContent: 'center', shadowRadius: 10, shadowColor: 'gray', shadowOpacity: 0.4, shadowOffset: { width: 2, height: 5 }
                        }}>

                            <Pressable
                                style={{ alignSelf: 'flex-end' }}
                                onPress={() => setStatusEnabled(!statusEnabled)}
                            >
                                <IconM color={colorOne} name="cancel" size={25} />
                            </Pressable>

                            <View style={{ marginVertical: spacing, }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: grayText, marginBottom: spacing }} onPress={() => setStatusEnabled(!statusEnabled)}>Completed</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: grayText, marginBottom: spacing }}>Ongoing</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: grayText, marginBottom: spacing }}>InActive</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: grayText, marginBottom: spacing }}>Cancelled</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: grayText, marginBottom: spacing }}>Closed</Text>
                            </View>


                        </View>
                    </View>
                </Modal>


            </View >
        )
    }


    return (
        <>
            <View>

                <SafeAreaView style={{ backgroundColor: colorOne }} />
                <Header nav={navigation} />
                <Divider width={width} color='white' />

                <View style={{ backgroundColor: colorOne, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', width: w, paddingVertical: spacing * 1.5 }}>
                        <Text style={{ color: textColor, fontSize: 14, }}>Type</Text>

                        <View style={{ borderBottomWidth: 2, borderColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 5 }}>
                            <Text style={{ color: textColor, fontSize: 14, }}>Status</Text>
                            {/* <Text style={{ color: textColor, fontSize: 14, marginLeft: 10 }} onPress={() => setStatusEnabled(!statusEnabled)}> Icon</Text> */}
                            <Icon color={textColor} style={{ marginLeft: 10 }} name={statusEnabled ? "chevron-up" : "chevron-down"} size={20} onPress={() => setStatusEnabled(!statusEnabled)} />
                        </View>

                        <View style={{ borderBottomWidth: 2, borderColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 5 }}>
                            <Text style={{ color: textColor, fontSize: 14, }}>Jul 2022</Text>
                            <Icon color={textColor} style={{ marginLeft: 10 }} name="chevron-down" size={20} />
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: spacing * 2, }}>
                    <SearchBar isOpen={searchVisible} />
                </View>


                {statusEnabled ? <CommonModal data={statusData} isOpen={statusEnabled} onPress={showOptions} /> : null}

                <View style={{ marginTop: spacing * .5 }}>
                    <View style={{ }}>
                        <TaskCard nav={navigation} />
                    </View>
                </View>



            </View>
        </>
    )
}

export default Task

const styles = StyleSheet.create({})