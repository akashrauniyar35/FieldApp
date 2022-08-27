import { Dimensions, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Divider from '../../components/Divider';

import boy from '../../assets/boy.png'

const { width, height } = Dimensions.get('screen')

const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const spacing = 10;
const orange = '#E05500'
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const taskIDColor = '#0066cc'
const offline = '#F44336'



const OpenTask = ({ navigation }) => {

    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}></View>


    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={{ backgroundColor: colorOne, }} />
                <Header nav={navigation} />
                <Divider width={width} color='white' />
                <View style={styles.techView}>
                    <View style={styles.box}><Image source={boy} style={styles.avatar} /><View style={[styles.online]} /></View>
                    <Text style={{ fontSize: 24, color: textColor, fontWeight: '600' }} >Prakash kandel</Text>
                    <Text style={{ fontSize: 18, color: textColor, marginTop: 10, }} >is currently Absent or Unavailable</Text>
                </View>

                <View style={styles.bottomView}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 14, color: grayText, }}>Schedule</Text>
                            <Text style={{ fontSize: 14, color: red, fontWeight: '600', marginLeft: spacing * 2 }}>InActive</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Icon name="chatbox-ellipses-outline" size={28} style={{ marginRight: spacing * 4, color: colorOne }} />
                            <Icon name="call-outline" size={28} color={colorOne} />
                        </View>
                    </View>


                    <View style={{ marginVertical: spacing }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: w * .4, }}>
                            <Text style={{ fontSize: 16, color: grayText, fontWeight: '600', }}>Task Details</Text>
                            <Text style={{ color: taskIDColor, fontSize: 16, marginLeft: 5 }}>[80845]</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginVertical: spacing * 2, }}>


                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .35 }}>
                                <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Task Name</Text>
                                <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Test Task One</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .45 }}>
                                <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Estimated Amount</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, marginRight: 5, color: grayText, fontWeight: '400' }}>₹</Text>
                                    <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>2000</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .45 }}>
                                <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Technician</Text>
                                <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Prakash Kandel</Text>
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 16, color: grayText, fontWeight: '600', }}>Customer Details</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'flex-start', marginVertical: spacing * 2, }}>


                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .45 }}>
                                <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Customer Name</Text>
                                <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>Bhagwati Pty Ltd</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .45 }}>
                                <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400' }}>Customer Number</Text>
                                <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400' }}>0415701457</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start', marginBottom: spacing * .45 }}>
                                <Text style={{ fontSize: 16, color: grayText, width: "45%", fontWeight: '400', alignSelf: 'flex-start' }}>Address</Text>
                                <Text style={{ fontSize: 16, color: grayText, width: "55%", fontWeight: '400', alignSelf: 'flex-start' }}>4444, Kathmandu 44460, Nepal Nepal Nepal Nepal</Text>
                            </View>

                        </View>




                    </View>







                </View>





            </View></>
    )
}

export default OpenTask

const styles = StyleSheet.create({

    container: { flex: 1, },
    techView: { backgroundColor: colorOne, flex: .5, alignItems: 'center', justifyContent: 'center' },
    avatar: {
        width: 100,
        height: 100,
    },
    box: { position: 'relative', backgroundColor: 'white', padding: 10, width: 140, height: 140, borderRadius: 100, alignItems: 'center', justifyContent: 'center', marginBottom: spacing * 2 },
    online: {
        width: 18,
        height: 18,
        position: 'absolute',
        top: spacing,
        right: spacing * 1.3,
        borderRadius: 100,
        backgroundColor: offline,
        borderColor: 'white', borderWidth: 2
    },
    bottomView: {
        flex: .5,
        backgroundColor: 'white',

        padding: spacing,

    }
})