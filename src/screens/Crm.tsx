import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TaskCard from '../components/TaskCard';
import Divider from '../components/Divider';
import EnquiryCard from '../components/EnquiryCard';
import OpenEnquiryModal from '../components/OpenEnquiryModal';

// import AddTask from '../components/EditTask';

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



const Crm = ({ navigation }) => {
    const [searchVisible, setSearchVisible] = useState(false)
    const [openEnquiry, setOpenEnquiry] = useState(false)
    const [addTaskVisible, setAddTaskVisible] = useState(false)
    const [tabOpen, setTabOpen] = useState('enquiries')

    // console.log("addTaskVisible", addTaskVisible)


    const toggleSearch = () => {
        setSearchVisible(!searchVisible)
    }

    const toggleOpenEnquiry = () => {
        setOpenEnquiry(!openEnquiry)
    }
    const toggleAddTask = () => {
        setAddTaskVisible(!addTaskVisible)
    }

    const toggleTabs = () => {
        setTabOpen(tabOpen === 'customers' ? 'enquiries' : 'customers')
    }




    const HeaderButtons = ({ onPress }) => {

        const inactiveTabTexColor = '#8e8e8e'

        return (
            <View style={{ paddingVertical: spacing, paddingTop: spacing * .5, paddingHorizontal: spacing, backgroundColor: colorOne }}>

                <View style={{
                    padding: spacing * .5, flexDirection: 'row',
                    borderRadius: 10,
                    alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white'
                }}>


                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={[styles.headerBox, { backgroundColor: tabOpen === 'customers' ? colorOne : 'transparent' }]}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: tabOpen === 'customers' ? 'white' : inactiveTabTexColor, }}>Customers</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={[styles.headerBox, { backgroundColor: tabOpen === 'enquiries' ? colorOne : 'transparent' }]}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: tabOpen === 'enquiries' ? 'white' : inactiveTabTexColor, }}>Enquiries</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>


                <View style={{}}></View>
            </View>
        )
    }

    return (
        <>



            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: colorOne }} />

                <View style={{}}>
                    <Header nav={navigation} />
                    <Divider />

                    <View style={{ backgroundColor: colorOne, paddingBottom: spacing * 2 }}>
                        <HeaderButtons onPress={toggleTabs} />
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -25 }}>
                    <View style={{ padding: spacing * 2, paddingBottom: spacing * .5 }} >
                        <SearchBar isOpen={searchVisible} />
                    </View>


                    {/* {
                        addTaskVisible ? <AddTask isOpen={addTaskVisible} onPress={toggleAddTask} navigation={navigation} /> : null
                    } */}

                    {tabOpen === 'customers' ?

                        <View style={{}}>
                            <TaskCard nav={navigation} />
                        </View> : <EnquiryCard nav={navigation} onPress={toggleOpenEnquiry} />
                    }

                    {
                        openEnquiry && <OpenEnquiryModal navigation={navigation} isOpen={openEnquiry} onPress={toggleOpenEnquiry} onClose={toggleOpenEnquiry} addTaskPress={toggleAddTask} />
                    }





                </View>


            </View>


        </>
    )
}

export default Crm

const styles = StyleSheet.create({
    headerBox: {
        padding: spacing * 1.25,
        backgroundColor: '#1E232B',
        paddingHorizontal: spacing * 5.5,
        // borderWidth: 1.5,
        // borderColor: 'white',
        borderRadius: 10,
    },


    headerBoxOn: {

    }

})