import { Alert, Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('screen')
const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const spacing = 10;
const red = '#C10000'
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const black = '#505D6D'
const greenOne = '#2BD9C5'


const UpdareInventory = ({ isOpen, data, onPress, onClose, item }: any) => {
    const [visible, setVisible] = useState(isOpen);
    const [selected, setSelected] = useState('');
    const [addItemQuantity, setAddItemQuantity] = useState(0);

    return (
        <>
            <View style={{}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                >
                    <View style={{ top: height * .65, }}>
                        <View style={{
                            borderTopLeftRadius: 20, borderTopRightRadius: 20,
                            backgroundColor: 'white', width: width, borderRadius: 5, padding: spacing * 2, paddingHorizontal: spacing * 2, alignSelf: 'center',
                            alignItems: 'center', justifyContent: 'flex-start', shadowRadius: 10, shadowColor: colorOne, shadowOpacity: 0.4, shadowOffset: { width: 2, height: 5, }
                        }}>
                            <Pressable
                                style={{ alignSelf: 'flex-end' }}
                                onPress={onClose}
                            >
                                <IconM color={colorOne} name="cancel" size={25} />
                            </Pressable>

                            <View style={{ marginBottom: spacing, alignItems: 'center', }}>
                                <Text style={{ color: grayText, fontSize: 18, }}>Update Quantity for</Text>
                                <Text style={{ color: grayText, fontSize: 22, }}>{item.title}</Text>
                            </View>



                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', marginVertical: spacing * 2, }}>

                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', }}>
                                    <TouchableWithoutFeedback onPress={() => setAddItemQuantity(addItemQuantity + 1)}>
                                        <Icon name="add-circle-outline" size={28} color={greenOne} />
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', }}>

                                    <Text style={{ fontSize: 28, fontWeight: '600', color: grayText, }}>{addItemQuantity}</Text>
                                </View>

                             
                             
                                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', }}>

                                    <TouchableWithoutFeedback onPress={() => setAddItemQuantity(addItemQuantity - 1)}>
                                        <Icon name="remove-circle-outline" size={28} color={redOne} />
                                    </TouchableWithoutFeedback>
                                </View>

                            </View>





                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing * 2 }}>

                                <TouchableWithoutFeedback onPress={() => onClose}>
                                    <View style={{ backgroundColor: colorOne, padding: spacing * 1.4, borderRadius: 8, width: width * .9, marginBottom: spacing * 5, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: textColor, fontSize: 18, fontWeight: '700' }}>+ ADD</Text>
                                    </View>
                                </TouchableWithoutFeedback>


                            </View>

                        </View>
                    </View >
                </Modal >
            </View >

        </>
    )
}

export default UpdareInventory

const styles = StyleSheet.create({})