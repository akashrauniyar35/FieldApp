import { Dimensions, StyleSheet, Switch, Text, View , TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'


import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get('screen')
const w = width * .95;
const colorOne = '#01151A';
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const textColor = '#7e7e7e';
const grayText = '#2e2e2e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const taskIDColor = '#0066cc'
const bg = 'white'


const taskCount = '12'
const taskCmpleted = '2'
const activationTime = '12:30 pm'
const badgeColor = yellow


const EnquiryCard = ({ nav, onPress }) => {


    return (
        <TouchableWithoutFeedback onPress={onPress}>






            <View style={{ paddingHorizontal: spacing * 2, }}>

                <View style={styles.box}>

                    <View style={{ backgroundColor: badgeColor, height: spacing * 5, width: spacing * .6, position: 'absolute', top: 25, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                        <Text style={{ color: grayText, fontSize: 12, marginRight: spacing }}>Annual Merchant Contract</Text>


                        <Text style={{ color: textColor, fontSize: 12, marginRight: spacing }}>31-07-2022</Text>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Icon name="business-outline" size={14} color={textColor} />
                            <Text style={{ color: grayText, fontSize: 18, marginVertical: spacing, marginBottom: spacing * .5, marginLeft: spacing }}>Company Name</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline', }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: grayText, }}>{taskCmpleted}</Text>
                            <Text style={{ marginHorizontal: 1 }}>/</Text>
                            <Text style={{ fontSize: 12, color: red }}>{taskCount}</Text>
                        </View>
                    </View>

                    <View style={{}}></View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                            <Text style={{ color: grayText, fontSize: 14, }}>Service Type</Text>

                            <Text style={{ color: red, fontSize: 14, marginLeft: spacing }}>Monthly</Text>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                            <View style={{ width: 15, marginRight: spacing, height: 15, backgroundColor: green, borderRadius: 100 }} />
                            <Text style={{ fontSize: 14, fontWeight: '600', color: grayText, }}>{activationTime}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default EnquiryCard

const styles = StyleSheet.create({

    box: {
        backgroundColor: bg, shadowColor: 'gray',
        shadowOpacity: .2, shadowRadius: 2, shadowOffset: { width: 2, height: 2 },
        paddingVertical: spacing,
        paddingHorizontal: spacing,
        borderRadius: 8,
        position: 'relative',
        paddingLeft: spacing * 1.5,
    },


})