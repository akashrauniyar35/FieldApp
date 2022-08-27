import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Divider from '../../components/Divider'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import ExpenditureModal from '../../components/ExpenditureModal'

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

const techListData = [
  {
    id: '00',
    name: 'Prakash Kandel',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    expense: '10,000'
  },
  {
    id: '01',
    name: 'Om Prakash Kandel',
    img: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1660633473~hmac=476f150412276b45287d786370302a27',
    expense: '12,200'
  },
  {
    id: '02',
    name: 'Shyam Timsina',
    img: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    expense: '18,900'
  },
  {
    id: '03',
    name: 'Samsung Chaudhary',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    expense: '12,000'
  },
]

const Expenditure = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const [expentitureModalVisible, setExpentitureModalVisible] = useState(false);
  const [selectedTech, setSelectedTech] = useState()


  const toggleExpenditureModal = (item) => {
    // console.log(item.name)
    setExpentitureModalVisible(!expentitureModalVisible)
    setSelectedTech(item.name)
  }

  const ExpenseCard = ({ item }) => {
    return (

      <>
        <TouchableWithoutFeedback onPress={() => toggleExpenditureModal( item )}>
          <View style={{}}>
            <View style={{ backgroundColor: 'white', paddingBottom: spacing, paddingHorizontal: spacing * 2, paddingVertical: spacing, marginBottom: spacing * 2, borderRadius: spacing / 2, shadowColor: grayText, shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { width: 1, height: 2 } }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Image source={{ uri: item.img }} style={{ width: 30, height: 30, borderRadius: 100 }} />
                  <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: grayText, marginLeft: spacing * 2 }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, color: textColor, marginLeft: spacing * 2 }}>Technician</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconM name="currency-inr" size={18} color={grayText} />
                  <Text style={{ color: grayText, fontSize: 14, fontWeight: '500' }}>{item.expense}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    )
  }


  return (
    <>
      <SafeAreaView style={{ backgroundColor: colorOne }} />
      <Header nav={navigation} />

      {/* <Divider width={width} color='white' /> */}
      <View style={{ backgroundColor: colorOne }}>
        <View style={{ backgroundColor: 'white', borderTopRightRadius: spacing, borderTopLeftRadius: spacing }}>

          <View style={{ padding: spacing, paddingHorizontal: spacing * 2 }} >
            <SearchBar isOpen={searchVisible} />
          </View>

          <View style={{ paddingTop: spacing, }}>


            <FlatList
              contentContainerStyle={{ paddingHorizontal: spacing * 2, backgroundColor: 'white' }}
              data={techListData}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (<ExpenseCard item={item} />)}
            />
          </View>


          {expentitureModalVisible ? <ExpenditureModal techName={selectedTech} isOpen={expentitureModalVisible} onPress={toggleExpenditureModal} onClose={toggleExpenditureModal} navigation={navigation} /> : null}


        </View>
      </View>
    </>
  )
}

export default Expenditure

const styles = StyleSheet.create({})