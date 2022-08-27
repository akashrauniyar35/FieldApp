import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image, TouchableWithoutFeedback, Platform } from 'react-native'
import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';

import pin from '../assets/pin.png'
import google from '../assets/google.png'

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




const data = [
    {
        id: '00',
        title: 'Sydney NSW 2000',
    },
    {
        id: '02',
        title: 'Kathmandu Napel 4650',
    },
    {
        id: '03',
        title: 'Biratnagar Nepal 4850',
    },
    {
        id: '04',
        title: 'Pokhara Nepal 4550',
    },
]

const LocationSearch = () => {
    const [onPress, setOnPress] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current
    const [selected, setSelected] = useState();


    const dropDownAnimation = {
        duration: 500,
        update: {
            duration: 300,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut
        },
        delete: {
            duration: 200,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut
        },
    }


    const arrowTransform = () => {
        const config = {
            duration: 300,
            toValue: onPress ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(dropDownAnimation);
        setOnPress(true);
    }


    return (
        <>

            <View style={styles.container}>
                <View style={[styles.taskTitle,]}>
                    <TextInput
                        onChangeText={(e) => { arrowTransform(), setSelected(e) }}
                        style={{ fontSize: 18, }}
                        value={selected ? selected : ''}
                        placeholderTextColor={grayText}
                        placeholder={selected ? selected : '....'}
                    />
                    <View style={[styles.taskTitleBadge, { width: 70, flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={{ fontSize: 12, color: grayText, paddingLeft: 6, padding: 2, backgroundColor: 'white' }}>Location</Text>
                        <View style={{ backgroundColor: 'white', paddingHorizontal: 4, paddingRight: 6, }}><Image source={google} style={{ width: 15, height: 15 }} /></View>
                    </View>
                    <View style={[styles.drowpDown, onPress && { overflow: 'hidden', marginTop: onPress && spacing * 2 }, { overflow: 'hidden', }]}>
                        {onPress && data.map((item) => {
                            return (
                                <TouchableWithoutFeedback key={item.id} onPress={() => { setSelected(item.title), arrowTransform(), setOnPress(false) }}>
                                    <View style={{ borderColor: grayText, marginBottom: spacing }}>
                                        <Text style={{ fontSize: 12, color: grayText, }}>{item.title}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </View>

                </View>
            </View>
        </>
    )
}

export default LocationSearch

const styles = StyleSheet.create({
    container: {

    },
    taskTitle: {
        placeHolderTextColor: {},
        padding: 14,
        borderRadius: 4,
        paddingVertical: Platform.OS == 'android' ? 3 : 14,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },
    taskTitleBadge: {
        width: 80,
        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },
    drowpDown: {
        flexGrow: .1
    },

    selected: {
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },

    unselected: {
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 10,
        paddingVertical: 18,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },

})