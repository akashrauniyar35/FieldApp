import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import SearchBar from '../../components/SearchBar';
import Icon from 'react-native-vector-icons/Ionicons'
import UpdareInventory from '../../components/UpdateInventory';


const colorTwo = '';
const colorThree = '';
const textColor = '#7e7e7e';
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


const data = [
    {
        id: '00',
        title: 'Logitech Mouse',
        description: 'wirelless bluettooth mouse',
        available: '12',
        issued: '2',
        total: '12',
    },
    {
        id: '01',
        title: 'Logitech Keyboard',
        description: 'wirelless bluettooth keyboard',
        available: '22',
        issued: '8',
        total: '40',
    },
]





const ItemInventory = ({ navigation }) => {
    const [searchVisible, setSearchVisible] = useState(false)
    const [tabOpen, setTabOpen] = useState('Inventory')
    const [visible, setVisible] = useState(false)



    const toggleOpenItem = () => {
        setVisible(!visible)
    }


    const toggleTabs = () => {
        setTabOpen(tabOpen === 'Inventory' ? 'Issued Items' : 'Inventory')
    }


    const HeaderButtons = ({ onPress }) => {

        const inactiveTabTexColor = '#8e8e8e'

        return (
            <View style={{ paddingVertical: spacing, paddingTop: spacing * .5, paddingHorizontal: spacing, backgroundColor: colorOne }}>

                <View style={{
                    padding: spacing * .5, flexDirection: 'row',
                    borderRadius: 10,
                    alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white'
                }}>


                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={[styles.headerBox, { backgroundColor: tabOpen === 'Inventory' ? colorOne : 'transparent' }]}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: tabOpen === 'Inventory' ? 'white' : inactiveTabTexColor, }}>Inventory</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={[styles.headerBox, { backgroundColor: tabOpen === 'Issued Items' ? colorOne : 'transparent' }]}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: tabOpen === 'Issued Items' ? 'white' : inactiveTabTexColor, }}>Issued Items</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>

                <View style={{}}></View>
            </View>
        )
    }



    const ItemCard = ({ item }) => {
        return (
            <>
                <View style={styles.itemCard}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginBottom: spacing * .5, color: grayText }}>{item.title}</Text>
                        <Pressable onPress={() => setVisible(!visible)}>
                            <Icon name="refresh" size={18} color={redOne} />
                        </Pressable>
                    </View>
                    <Text style={{ marginBottom: spacing, color: textColor }}>{item.description}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: grayText }}>Available: {item.available}</Text>
                        <Text style={{ color: grayText }}>Issued Qty: {item.issued}</Text>
                        <Text style={{ color: grayText }}>Total Qty: {item.total}</Text>
                    </View>

                </View>

                {
                    visible && <UpdareInventory navigation={navigation} isOpen={visible} onPress={toggleOpenItem} item={item} onClose={toggleOpenItem} />
                }
            </>
        )
    }

    return (
        <View>
            <SafeAreaView style={{ backgroundColor: colorOne }} />
            <Header nav={navigation} />
            <Divider width={width} color='white' />

            <View style={{ backgroundColor: colorOne, paddingVertical: spacing, paddingBottom: spacing * 4, }}>
                <HeaderButtons onPress={toggleTabs} />
            </View>


            <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -35 }}>

                <View style={{ paddingHorizontal: spacing * 2, padding: spacing }}>
                    <SearchBar isOpen={searchVisible} />
                </View>
            </View>


            {
                tabOpen === 'Inventory' ?

                    <View style={{}}>
                        <FlatList
                            data={data}

                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (<ItemCard item={item} />)}
                        />
                    </View>
                    :
                    <View style={{}}>
                        <FlatList
                            data={data}

                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (<ItemCard item={item} />)}
                        />
                    </View>
            }


        </View>
    )
}

export default ItemInventory

const styles = StyleSheet.create({
    headerBox: {
        padding: spacing * 1.25,
        paddingHorizontal: spacing * 5,
        borderRadius: 10,
    },


    itemCard: {
        // backgroundColor: 'orange',
        borderRadius: 4,
        padding: spacing,

        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 1.5,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal: spacing * 2,
        marginBottom: spacing * 2
    }
})