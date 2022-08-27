import { Alert, Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
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
const green = '#48a14d'
const blue = '#007792'
const orange = '#E05500'

const CommonModal = ({ isOpen, data, onPress, onClose }: any) => {
    const [visible, setVisible] = useState(isOpen);
    const [selected, setSelected] = useState('');


    return (
        <>
            <View style={{}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                >
                    <View style={{ top: height * .7, }}>
                        <View style={{
                            backgroundColor: colorOne, width: width, borderRadius: 5, padding: spacing * 2, paddingHorizontal: spacing * 2, alignSelf: 'center',
                            alignItems: 'center', justifyContent: 'flex-start', shadowRadius: 10, shadowColor: 'gray', shadowOpacity: 0.4, shadowOffset: { width: 2, height: 5 }
                        }}>
                            <Pressable
                                style={{ alignSelf: 'flex-end' }}
                                onPress={onClose}
                            >
                                <IconM color={textColor} name="cancel" size={25} />
                            </Pressable>

                            <View style={{ marginVertical: spacing, }}>
                                <FlatList
                                    contentContainerStyle={{ flex: 1, width: w }}
                                    data={data}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => {
                                        const select = item.title;
                                        return (
                                            <Text onPress={() => { setSelected(selected) }} key={item.id} style={{ fontSize: 14, fontWeight: '600', color: textColor, marginBottom: spacing * 1.5 }}>{item.title}</Text>
                                        )
                                    }}
                                />
                            </View>


                        </View>
                    </View >
                </Modal >
            </View>

        </>
    )
}

export default CommonModal

const styles = StyleSheet.create({})