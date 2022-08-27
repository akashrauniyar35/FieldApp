import { Animated, Button, Dimensions, Platform, LayoutAnimation, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, UIManager } from 'react-native'
import React, { useRef, useState } from 'react'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen')
const color = '#7E7E7E'
const colorOne = '#01151A';
const spacing = 10;
const grayText = '#2e2e2e'



if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


const SearchBar = ({ isOpen }) => {




    const [visible, setVisible] = useState(isOpen);
    const [boxPosition, setBoxPosition] = useState("left");

    const moveRightAnimation = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setBoxPosition(boxPosition === "left" ? "right" : "left");
        setVisible(!visible);
    };

    const closeIcon = () => {
        return (
            <TouchableWithoutFeedback onPress={() => moveRightAnimation()}>
                <Icon name="close" size={20} color={colorOne} />
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={{ height: 55, }}>

            <View style={[!visible ? {} : styles.borderVisible, {
                alignItems: "center", position: "relative"
            }]}>

                {/* <View style={{ position: "relative", }}> */}
                <TouchableWithoutFeedback onPress={() => moveRightAnimation()} >
                    <View style={{ paddingVertical: 14, paddingRight: 7, alignSelf: 'flex-start', position: 'absolute', }}>
                        <Icon name="search" style={{}} size={20} color={colorOne} />
                    </View>

                </TouchableWithoutFeedback>
                {/* </View> */}




                <View style={[
                    boxPosition === "left" ? null : styles.moveRight
                ]}>
                    {visible ? <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.box}>
                            <TextInput
                                // onPressIn={visible}
                                style={[styles.taskTitle, {}]}
                                // onChangeText={onChangeNumber}
                                placeholderTextColor={grayText}
                                placeholder={'search bla blah!'}
                            />
                            {closeIcon()}
                        </View>
                    </TouchableWithoutFeedback> : null}
                </View>

            </View >
        </View >
    )
}

export default SearchBar

const styles = StyleSheet.create({

    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,

    },
    borderVisible: {
        borderBottomWidth: 1.5,
        borderColor: grayText,
    },
    taskTitle: {
        width: '88%',
        fontSize: 18,
        position: 'relative',
    },
    taskTitleBadge: {
        position: 'absolute',
        backgroundColor: 'white',
        top: -8
    },
    moveRight: {
        alignSelf: "flex-end"
    },
    moveLeft: {
        alignSelf: "flex-start"
    },



})