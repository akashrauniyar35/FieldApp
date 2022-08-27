import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions, Modal, Pressable, Alert, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import Divider from '../components/Divider';
import Donut from '../components/Donut';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMN from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonModal from '../components/CommonModal';


const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const orange = '#E05500'

const { width, height } = Dimensions.get('screen')
const w = width * .95;
const colorOne = '#01151A';
const spacing = 10;
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const black = '#505D6D'
const greenOne = '#2BD9C5'


const data = [{
    percentage: 480,
    color: 'tomato',
    max: 10
}]


const periodsData = [
    {
        id: '00',
        title: 'Today',
    },
    {
        id: '01',
        title: 'Week',
    },
    {
        id: '02',
        title: 'Month',
    },
    {
        id: '04',
        title: 'Year',
    },
]


const pieData = [{
    percentage: 8,
    color: 'tomato',
    max: 10
}, {
    percentage: 14,
    color: 'skyblue',
    max: 20
}, {
    percentage: 92,
    color: 'gold',
    max: 100
}, {
    percentage: 240,
    color: '#222',
    max: 500
}]


const Home = ({ navigation }) => {
    const [periodSelected, setPeriodSelected] = useState(false);
    const [selectPeriod, setSelectedPeriod] = useState();
    const animationController = useRef(new Animated.Value(0)).current


    const arrowRotateAnimation = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    })



    const arrowTransform = () => {
        const config = {
            duration: 300,
            toValue: periodSelected ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start();
        setPeriodSelected(!periodSelected);
    }


    const showOptions = () => {
        setPeriodSelected(!periodSelected)

    }

    return (
        <>
            {/* <Drawer /> */}

            <SafeAreaView style={{ backgroundColor: colorOne }} />
            <Header nav={navigation} />
            <View style={{ backgroundColor: colorOne, justifyContent: 'center', alignItems: 'center' }}>
                <Divider width={width} color='white' />
                <View style={{ width: w, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: spacing, paddingBottom: 40, }}>
                        <View style={{ flexDirection: 'row', width: w * .6 }}>
                            <Text style={{ color: textColor, fontSize: 18, fontWeight: '700' }}>Hello, </Text>
                            <Text style={{ color: textColor, fontSize: 18, fontWeight: '700' }}>Akash</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: w * .4, }}>
                            <Text style={{ color: textColor, fontSize: 14, }}>{selectPeriod ? selectPeriod : 'Today'}</Text>

                            <Animated.View style={{ transform: [{ rotateZ: arrowRotateAnimation }], overflow: 'hidden' }}>
                                <Icon color={textColor} style={{}} name={"chevron-down"} size={28} onPress={() => arrowTransform()} />
                            </Animated.View>

                        </View>
                    </View>
                </View>
            </View >


            {/* {periodSelected ? <Periods /> : null} */}
            {periodSelected ? <CommonModal data={periodsData} isOpen={periodSelected} onPress={showOptions} onClose={arrowTransform} /> : null}
            {/* <CommonÏModal isOpen={periodSelected} /> */}


            <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -25, paddingHorizontal: spacing * 2 }}>

                <View style={{ alignSelf: 'center', justifyContent: 'center', paddingVertical: spacing, alignItems: 'center', }}>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: w, paddingVertical: spacing, }}>
                        <Text style={{ color: 'gray', fontSize: 12, marginRight: 10 }}>Calendar</Text>
                        <Text style={{ fontSize: 12, marginBottom: spacing }}>Today</Text>

                        {/* <Button title='Modal' onPress={() => navigation.navigate('ModalTwo')} /> */}

                    </View>





                    <View style={{ paddingVertical: spacing }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>

                            {data.map((p, i) => {
                                return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} />

                            })}

                            <View style={{ left: -spacing * 1 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing * 1.5, justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: purple, width: 10, height: 10, borderRadius: 100, marginRight: 10, }} />
                                    <Text style={{ fontSize: 12, color: grayText }}>Completed</Text>
                                    <Text style={{ fontSize: 12, color: purple, }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing * 1.5, justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: yellow, width: 10, height: 10, borderRadius: 100, marginRight: 10, }} />

                                    <Text style={{ fontSize: 12, color: grayText }}>Ongoing</Text>
                                    <Text style={{ fontSize: 12, color: yellow, }}>00</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing * 1.5, justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: redOne, width: 10, height: 10, borderRadius: 100, marginRight: 10, }} />

                                    <Text style={{ fontSize: 12, color: grayText }}>Inactive</Text>
                                    <Text style={{ fontSize: 12, color: redOne, }}>18</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: greenOne, width: 10, height: 10, borderRadius: 100, marginRight: 10, }} />
                                    <Text style={{ fontSize: 12, color: grayText }}>Rejected</Text>
                                    <Text style={{ fontSize: 12, color: greenOne, }}>13</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: spacing * 2, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%' }}>
                                <View style={{ position: 'relative' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing * .5, paddingBottom: spacing, justifyContent: 'flex-start' }}>
                                        <Icon name="wallet-outline" size={22} color={redOne} />
                                        <Text style={{ color: grayText, top: 1, marginLeft: spacing }}>Earnings</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <View style={styles.earningCard}>
                                            <Text style={{ fontSize: 14, top: -6, marginRight: 5, color: textColor, alignSelf: 'flex-start' }}>₹</Text>
                                            <Text style={{ fontSize: 20, fontWeight: '600', color: textColor, width: '95%' }}>192000</Text>
                                        </View>



                                    </View>
                                </View>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ width: '70%' }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', height: spacing * 4 }}>
                                        <IconMN name="file-sign" size={22} color={redOne} />
                                        <Text style={{ color: grayText, top: 4, marginLeft: spacing }}>AMC Status</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing * .5 }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 30, }}>
                                            <View style={{ backgroundColor: greenOne, width: 10, height: 10, borderRadius: 100, marginRight: spacing, }} />
                                            <Text style={{ fontSize: 12, color: grayText, width: '50%', marginRight: spacing * .25, }}>Completed</Text>
                                            <View style={{ padding: 4, borderRadius: 100, backgroundColor: grayText, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>12</Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 30, }}>

                                            <View style={{ backgroundColor: redOne, width: 10, height: 10, borderRadius: 100, marginRight: spacing * .5, }} />
                                            <Text style={{ fontSize: 12, color: grayText, width: '50%', marginRight: spacing * .25, }}>Upcoming</Text>
                                            <View style={{ padding: 4, borderRadius: 100, backgroundColor: grayText, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>12</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing * .5 }}>
                                            <View style={{ backgroundColor: yellow, width: 10, height: 10, borderRadius: 100, marginRight: spacing, }} />
                                            <Text style={{ fontSize: 12, color: grayText, width: '50%', marginRight: spacing * .25, }}>Completed</Text>
                                            <View style={{ padding: 4, borderRadius: 100, backgroundColor: grayText, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>12</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <View style={{ backgroundColor: purple, width: 10, height: 10, borderRadius: 100, marginRight: spacing * .5, }} />
                                            <Text style={{ fontSize: 12, color: grayText, width: '50%', marginRight: spacing * .25, }}>Rejected</Text>
                                            <View style={{ padding: 4, borderRadius: 100, backgroundColor: grayText, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>12</Text>
                                            </View>
                                        </View>
                                    </View>


                                </View>
                            </View>
                        </View>
                    </View>

                    <Divider width={width} color='#B8B8B8' height={10} opacity={true} />



                    <View style={{ marginTop: spacing * 2 }}>
                        <View style={{}}>
                            <Text style={{ color: grayText }}>Today's Attendance</Text>


                            <View style={{ width: w, backgroundColor: colorOne, height: 14, borderRadius: 10, marginVertical: spacing * 2 }} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: green, fontSize: 38, fontWeight: '600' }}>18</Text>
                                    <Text style={{ color: grayText, fontSize: 14, }}>Present</Text>
                                </View>

                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: orange, fontSize: 38, fontWeight: '600' }}>0</Text>
                                    <Text style={{ color: grayText, fontSize: 14, }}>idle</Text>
                                </View>

                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: red, fontSize: 38, fontWeight: '600' }}>2</Text>
                                    <Text style={{ color: grayText, fontSize: 14, }}>Absent</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', }}></View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}></View>


                        </View>
                    </View>




                    {/* <Divider width={width} color='#B8B8B8' height={10} opacity={true} /> */}



                </View>
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({

    earningCard: {
        backgroundColor: colorOne, padding: spacing * .5, borderRadius: 4,
        paddingVertical: spacing, alignSelf: 'center',
        width: '85%',
        borderColor: purple, flexDirection: 'row', alignItems: 'center',
    }
})