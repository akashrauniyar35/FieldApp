import { StyleSheet, Text, Dimensions, View, TextInput, Animated, LayoutAnimation, Image , TouchableWithoutFeedback} from 'react-native'
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




const Accordian = ({ title, onPress, isOpen, data }) => {
    const [visible, setVisible] = useState(isOpen);
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
            toValue: visible ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(dropDownAnimation);
        setVisible(true);
    }


    const renderItem = (item) => {
        return (
            <TouchableWithoutFeedback key={item.id} onPress={() => { arrowTransform(), setSelected(item.label), setVisible(false) }}>
                <View style={styles.box}>
                    <Text style={{ color: grayText, fontSize: 12, }}>{item.label}</Text>
                </View >
            </TouchableWithoutFeedback>
        )
    }

    const arrowRotateAnimation = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    })

    return (
        <>

            <View style={styles.container}>
                <View style={[styles.taskTitle,]}>

                    <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>

                            <Text style={{ fontSize: 18, color: grayText }}>{selected ? selected : ''}</Text>

                            <TouchableWithoutFeedback onPress={() => { arrowTransform(), setVisible(!visible) }}>
                                <Animated.View style={{ transform: [{ rotateZ: arrowRotateAnimation }] }}>
                                    <Icon color={grayText} style={{}} name={onPress ? "chevron-up" : "chevron-down"} size={28} />
                                </Animated.View>
                            </TouchableWithoutFeedback>


                        </View>
                    </TouchableWithoutFeedback>


                    <View style={[styles.taskTitleBadge, {}]}>
                        <Text style={{ fontSize: 12, color: grayText, paddingHorizontal: 6, padding: 2, backgroundColor: 'white' }}>{title} *</Text>
                    </View>

                    <View style={[styles.drowpDown, { overflow: 'hidden' }]}>
                        {visible && data.map((item) => {
                            return (renderItem(item))
                        })}
                    </View>



                </View>
            </View>
        </>
    )
}

export default Accordian

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    taskTitle: {
        padding: 12,
        paddingHorizontal: spacing,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#7E7E7E',
        position: 'relative',
    },
    taskTitleBadge: {
        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },
    drowpDown: {
        // flexGrow: .1
    },

    box: {
        marginBottom: spacing,
    },
    selected: {
        alignItems: 'center',
        paddingVertical: 14,
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