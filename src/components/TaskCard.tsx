import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import EditTask from './EditTask';

const { width, height } = Dimensions.get('screen')
const w = width * .95;
const color = ''
const tagOne = ''
const tagTwo = ''
const tagThree = ''
const tagFour = ''
const tagFive = ''
const tagSix = ''
const textColor = '#7e7e7e'
const grayText = '#2e2e2e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const taskIDColor = '#0066cc'
const orange = '#E05500'
const bg = '#edebe8'

import avatar from '../assets/boy.png'
import rupee from '../assets/rupee.png'


const TaskCard = ({ nav }) => {
    const [editable, setEditable] = useState(false);

    const onEditPress = () => {
        setEditable(!editable)
    }


    return (


        <View>

            <TouchableWithoutFeedback onPress={() => nav.navigate('openTask')}>
                <View style={styles.taskCard}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.badge}>
                            <Text style={{ color: 'white', fontSize: 10, fontWeight: '600' }}>SCHEDULE</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10, paddingTop: 2 }}>
                            <Image style={[styles.avatar, { width: 25, height: 25, marginRight: 10, }]}
                                source={rupee}
                            />
                            <Text style={{ color: grayText, fontSize: 18, fontWeight: '600', marginRight: 5, }}>₹</Text>
                            <Text style={{ color: grayText, fontSize: 18, fontWeight: '600' }}>40,100</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: spacing, paddingVertical: spacing * .5 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ color: grayText, fontWeight: '600' }}>Task Name</Text>
                            <Text style={{ color: taskIDColor, fontSize: 10, marginHorizontal: 10 }}>[80845]</Text>
                        </View>
                        <Text style={{ color: '#7e7e7e' }}>Kathmandu</Text>
                        <View style={{ marginVertical: spacing * .5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={[styles.avatarRing, {}]}>
                                        <Image style={[styles.avatar,]}
                                            source={avatar}
                                        />
                                    </View>
                                    <Text style={{ color: grayText, marginHorizontal: 10 }}>Prakash Thapa</Text>
                                </View>
                                <View style={{ alignItems: 'center', }}>
                                    <Icon name="ios-create-outline" color={grayText} style={{ alignSelf: 'flex-end' }} size={25} onPress={() => setEditable(!editable)} />
                                    <Text style={{ color: red, fontSize: 10, fontWeight: '600', alignSelf: 'flex-end' }}>InActive</Text>
                                    <Text style={{ color: textColor, fontSize: 10, alignSelf: 'flex-end' }}>30-07-2022 10: 00 am</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

            </TouchableWithoutFeedback>
            {editable ? <EditTask onPress={onEditPress} isOpen={editable} nav={nav} /> : null}
        </View>
    )
}

export default TaskCard

const styles = StyleSheet.create({
    taskCard: {

        width: w * .9,
        position: 'relative',
        backgroundColor: bg,
        alignSelf: 'center',
        borderRadius: 10,
    },
    badge: {
        backgroundColor: green,
        width: 80,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: 4,
        height: 20,
        paddingHorizontal: 10,
    }

    ,
    avatar: {

        height: 30,
        width: 30,
        borderRadius: 100,
    },
    avatarRing: {
        borderWidth: 2, height: 40, alignItems: 'center', width: 40, justifyContent: 'center', borderRadius: 100,
        borderColor: 'white',
    },



})