import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Vibration, Animated, Platform, Easing, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';

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



const Header = ({ nav, goBack, goBackOnPress }) => {


    const shakeAnimation = new Animated.Value(0);
    const bounceValue = new Animated.Value(0);
    const [bouncing, setBouncing] = useState(false)
    const route = useRoute();

    const bounceNoti = () => {
        // setBouncing(!bouncing)
        Animated.sequence([
            Animated.spring(bounceValue, { toValue: -100, useNativeDriver: true }),
            Animated.spring(bounceValue, { toValue: 0, useNativeDriver: true }),
        ]).start();
    }

    startShake = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
            ]), { iterations: 2 }
        ).start();
    }

    const HeaderGoBack = () => {
        return (
            <TouchableWithoutFeedback onPress={goBackOnPress}>
                <View style={{}}>
                    <Icon name="arrow-back-circle-outline" size={24} color="white" />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={{ paddingVertical: 10, backgroundColor: colorOne, }}>
            <View style={{ width: w, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: textColor, fontSize: 18, }}>{route.name}</Text>

                {goBack ? <HeaderGoBack /> : <View style={{ width: w * .3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <View style={{ position: 'relative' }}>


                        <Animated.View
                            style={{
                                transform: [{ translateY: bounceValue }],
                                backgroundColor: textColor, borderRadius: 100, width: 15,
                                position: 'absolute', right: -15, bottom: 20,
                                height: 15, alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Text style={{ color: colorOne, fontSize: 12, fontWeight: '600', }}>4</Text>
                        </Animated.View>



                        <View style={{ backgroundColor: 'white', marginLeft: 10, borderRadius: 100, padding: 4, paddingVertical: 3 }}>
                            <Animated.View style={{
                                transform: [{
                                    rotate: shakeAnimation.interpolate({
                                        inputRange: [-1, 1],
                                        outputRange: ['-0.1rad', '0.1rad']
                                    })
                                }]
                            }}>
                                <Icon color={colorOne} style={{}} name="notifications" size={20} onPress={() => bounceNoti() & startShake()} />
                            </Animated.View>
                        </View>
                    </View>
                    <Icon color={textColor} style={{ marginLeft: 10 }} name="menu" size={28} onPress={() => nav.toggleDrawer()} />
                </View>}

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    box: {

    }
})