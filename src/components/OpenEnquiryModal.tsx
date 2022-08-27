import { Alert, Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AddTask from '../components/EditTask';


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

const OpenEnquiryModal = ({ isOpen, onPress, onClose, addTaskPress, navigation }: any) => {
    const [addTaskVisible, setAddTaskVisible] = useState(false)
    const [visible, setVisible] = useState(isOpen);
    const [selected, setSelected] = useState('');


    const toggleAddTask = () => {
        setAddTaskVisible(!addTaskVisible)
    }


    return (
        <>
            <View style={{}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                >
                    <View style={{ top: height * .28, }}>
                        <View style={{
                            backgroundColor: colorOne, width: width, borderRadius: 5, padding: spacing * 2, paddingHorizontal: spacing * 2, alignSelf: 'center',
                            alignItems: 'center', justifyContent: 'flex-start', shadowRadius: 10, shadowColor: 'gray', shadowOpacity: 0.4, shadowOffset: { width: 2, height: 5 }
                        }}>
                            <Pressable
                                style={{ alignSelf: 'flex-end' }}
                                onPress={onClose}
                            >
                                <IconM color={textColor} name="cancel" size={25} />
                            </Pressable>

                            <View style={styles.viewBox}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing * 3 }}>

                                    <Text style={{ color: textColor, fontSize: 18, fontWeight: '600', marginLeft: spacing }}>Repairing</Text>



                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Icon name="chatbox-ellipses-outline" size={22} style={{ color: textColor }} />
                                        <Icon name="call-outline" size={22} style={{ color: textColor, marginLeft: spacing * 2 }} />
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Enquiry No.</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>#1</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Date</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>30-07-2022</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Customer Name</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Logitech Options</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Contact Number</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>0415701457</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Address</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Kathmandu 4600, Nepal</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Task Type</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Urgent</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Techniical Problem</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Computer Setup</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Special Instructions</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Some Special insptructions</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing * 2 }}>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Reference</Text>
                                    <Text style={{ color: textColor, fontSize: 16, marginLeft: spacing }}>Friend</Text>
                                </View>


                                <View style={{ marginTop: spacing * 2, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing * 2 }}>

                                    <TouchableWithoutFeedback onPress={() => toggleAddTask}>
                                        <View style={{ backgroundColor: 'white', padding: spacing * 1.4, borderRadius: 8, width: width * .9, marginBottom: spacing * 3, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: colorOne, fontSize: 18, fontWeight: '700' }}>+ ADD TASK</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={onClose}>
                                        <View style={{ marginBottom: spacing * 2 }}>
                                            <Text style={{ color: textColor }}>Cancle</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>


                            </View>

                        </View>
                    </View >
                </Modal>
            </View>


            {/* {
                addTaskVisible ? <AddTask isOpen={addTaskVisible} onPress={toggleAddTask} navigation={navigation} /> : null
            } */}


        </>
    )
}

export default OpenEnquiryModal

const styles = StyleSheet.create({
    viewBox: {
        margin: spacing * 2,
        width: '100%',
    }
})