import { Alert, Dimensions, FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Divider from './Divider';


const { width, height } = Dimensions.get('screen')
const w = width * .95;
const colorOne = '#01151A';
const spacing = 10;
const grayText = '#2e2e2e'
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const black = '#505D6D'
const greenOne = '#2BD9C5'
const textColor = '#7e7e7e';

const ExpenditureModal = ({ isOpen, onPress, onClose, navigation, techName }: any) => {



    const [visible, setVisible] = useState(isOpen);
    const [selected, setSelected] = useState('');
    // console.log('techName', techName)



    return (
        <>

            <View style={{}}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                >
                    <View style={{}}>
                        <View style={{
                            height: height,
                            backgroundColor: 'white', width: width, alignSelf: 'center',
                            shadowRadius: 10, shadowColor: 'gray', shadowOpacity: 0.4, shadowOffset: { width: 2, height: 5 }
                        }}>

                            <SafeAreaView style={{ backgroundColor: colorOne }} />
                            <Header goBack={true} goBackOnPress={onClose} />

                            <View style={{ backgroundColor: colorOne }}>

                                <View style={{ paddingHorizontal: spacing * 1, paddingVertical: spacing, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                    <Text style={{ color: 'white', marginRight: spacing * 2 }}>16th Aug 2022</Text>
                                    <Icon name="chevron-down" size={22} color={'white'} />
                                </View>


                                <View style={{ paddingVertical: spacing * 2, paddingHorizontal: spacing * 2, backgroundColor: 'white', borderTopRightRadius: spacing, borderTopLeftRadius: spacing }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ color: grayText, fontWeight: '600' }}>{techName}</Text>
                                        <Text style={{ color: colorOne }}>16th Aug 2022</Text>

                                    </View>


                                    <View style={{ padding: spacing, backgroundColor: 'white', marginVertical: spacing * 2, borderRadius: spacing / 2, shadowColor: grayText, shadowOpacity: 0.3, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing }}>

                                            <Text style={{ color: grayText, }}>Credited Amount :</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                <IconM name="currency-inr" size={16} color={grayText} style={{ width: '10%', }} />
                                                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                    <Text style={{ color: grayText, alignSelf: 'flex-start' }}>5,500</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing }}>

                                            <Text style={{ color: grayText, }}>Opening Amount :</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                <IconM name="currency-inr" size={16} color={grayText} style={{ width: '10%', }} />
                                                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                    <Text style={{ color: grayText, alignSelf: 'flex-start' }}>5,500</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing }}>

                                            <Text style={{ color: grayText, }}>Earned Amount :</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                <IconM name="currency-inr" size={16} color={grayText} style={{ width: '10%', }} />
                                                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                    <Text style={{ color: grayText, alignSelf: 'flex-start' }}>5,500</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing }}>

                                            <Text style={{ color: grayText, }}>Total Expenses :</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                <IconM name="currency-inr" size={16} color={grayText} style={{ width: '10%', }} />
                                                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                    <Text style={{ color: grayText, alignSelf: 'flex-start' }}>5,500</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing }}>

                                            <Text style={{ color: grayText, }}>Return :</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                <IconM name="currency-inr" size={16} color={grayText} style={{ width: '10%', }} />
                                                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                    <Text style={{ color: grayText, alignSelf: 'flex-start' }}>5,500</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <Divider width={'105%'} color={grayText} height={.5} />

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: spacing }}>

                                            <Text style={{ color: grayText, fontWeight: '600' }}>Remaining Amount :</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                <IconM name="currency-inr" size={16} color={grayText} style={{ width: '10%', }} />
                                                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                                                    <Text style={{ color: grayText, alignSelf: 'flex-start' }}>5,500</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </View>

                                </View>
                            </View>

                            <View style={{ backgroundColor: 'white', paddingHorizontal: spacing * 2 }}>
                                <Text style={{ color: colorOne, }}>Expense List</Text>

                                <View style={{ padding: spacing, backgroundColor: 'white', marginVertical: spacing * 2, borderRadius: spacing / 2, shadowColor: grayText, shadowOpacity: 0.3, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } }}>
                                    <Text style={{ color: colorOne, }}>NA</Text>
                                </View>

                            </View>

                        </View>
                    </View >
                </Modal >
            </View>

        </>
    )
}

export default ExpenditureModal

const styles = StyleSheet.create({})