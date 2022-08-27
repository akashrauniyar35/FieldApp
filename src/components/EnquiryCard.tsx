import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('screen')
const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = '#7e7e7e';
const grayText = '#2e2e2e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const taskIDColor = '#0066cc'
const bg = 'white'

const EnquiryCard = ({ nav, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{ paddingHorizontal: spacing * 2, }}>
                <View style={styles.box}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ color: red, fontSize: 12, marginRight: spacing }}>Enquiry</Text>
                            <Text style={{ color: taskIDColor, fontSize: 12, }}>#1</Text>
                        </View>
                        <Text style={{ color: textColor, fontSize: 12, marginRight: spacing }}>31-07-2022</Text>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Icon name="business-outline" size={14} color={textColor} />
                        <Text style={{ color: grayText, fontSize: 18, marginVertical: spacing, marginBottom: spacing * .5, marginLeft: spacing }}>Company Name</Text>
                    </View>

                    <View style={{}}></View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <IconM name="map-marker-radius-outline" size={14} color={textColor} />
                            <Text style={{ color: textColor, fontSize: 14, marginLeft: spacing }}>Kathmandu 46000, Nepal</Text>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Icon name="chatbox-ellipses-outline" size={22} style={{ color: grayText }} />
                            <Icon name="call-outline" size={22} style={{ color: grayText, marginLeft: spacing * 2 }} />
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
    },


})