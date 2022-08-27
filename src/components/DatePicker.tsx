import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, Platform, View, Animated, LayoutAnimation, TextInput, Dimensions, } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';



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

const DatePicker = () => {
    const [pickDate, setPickDate] = useState(false);
    const [pickTime, setPickTime] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState()
    const animationController = useRef(new Animated.Value(0)).current


    // console.log('DATe', date)


    const selectDate = (event, value) => {
        setDate(value)
        arrowTransform()
    }

    const selectTime = (event, value) => {
        setTime(value)
        // console.log('D T', time)
        arrowTransform()
    }

    const dropDownAnimation = {
        duration: 300,
        update: {
            duration: 300,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut
        },
        delete: {
            duration: 300,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut
        },
    }


    const arrowTransform = () => {
        const config = {
            duration: 300,
            toValue: pickDate ? 0 : 1,
            useNativeDriver: true
        };

        LayoutAnimation.configureNext(dropDownAnimation);
        Animated.timing(animationController, config).start();
        setPickDate(false)
    }

    return (


        <View style={{}}>



            {/* <TouchableWithoutFeedback onPress={() => { arrowTransform(), setPickDate(!pickDate) }}>
                <View>
                    <TextInput
                        style={[styles.taskTitle, { width: w * .55 }]}
                        // onPress={() => { arrowTransform(), setPickDate(!pickDate) }}
                        // value={number}
                        placeholderTextColor={grayText}
                        placeholder="Date *"
                        editable={false}
                    />
                    <View style={[styles.taskTitleBadge, {}]}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Date *</Text></View>
                </View>
            </TouchableWithoutFeedback> */}

            <View style={{}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>


                    <TouchableWithoutFeedback onPress={() => { arrowTransform(), setPickTime(!pickTime) }}>
                        <View>
                            <TextInput
                                style={[styles.taskTitle, { width: w * .35 }]}

                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholderTextColor={grayText}
                                placeholder="Time *"
                                editable={false}
                            />
                            <View style={[styles.taskTitleBadge, {}]}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Time *</Text></View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { arrowTransform(), setPickDate(!pickDate) }}>
                        <View>
                            <TextInput
                                style={[styles.taskTitle, { width: w * .55 }]}
                                onPressIn={() => { arrowTransform(), setPickDate(!pickDate) }}
                                // onPress={() => { arrowTransform(), setPickDate(!pickDate) }}
                                // value={number}
                                placeholderTextColor={grayText}
                                placeholder="Date *"
                                editable={false}
                            />
                            <View style={[styles.taskTitleBadge, {}]}><Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>Date *</Text></View>
                        </View>
                    </TouchableWithoutFeedback>






                </View>

                <Animated.View style={{ overflow: 'hidden', flex: 1 }}>
                    {
                        pickDate && <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={selectDate}
                            style={styles.datePicker}
                        />
                    }
                </Animated.View>



                <Animated.View style={{ overflow: 'hidden', flex: 1 }}>
                    {
                        pickTime ? <DateTimePicker
                            value={date}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={selectTime}
                            style={styles.datePicker}
                        /> : null
                    }
                </Animated.View>


            </View>

        </View>


    )
}

export default DatePicker

const styles = StyleSheet.create({
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },
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
})