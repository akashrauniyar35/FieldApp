import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Divider from '../../components/Divider';


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
    online: true,
    name: 'Smith Row',
    battery: '88',
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    gps: true,
  },
  {
    id: '01',
    online: true,
    name: 'Michael Smith',
    battery: '40',
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    gps: true,
  }, {
    id: '02',
    online: true,
    name: 'Ninja Turtle',
    battery: 98,
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    gps: true,
  }, {
    id: '03',
    online: false,
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    name: 'Jackie Chang',
    battery: '5',
    gps: false,
  },
]


const TechnicianList = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const [batteryIconLevel, setBatteryIconLevel] = useState('')




  const TechCard = ({ item }) => {

    console.log('Battery', item.battery)

    const high = 60;
    const medium = 50;
    const low = 10;

    item.battery <= low ? setBatteryIconLevel('battery-low') : item.battery <= medium ? setBatteryIconLevel('battery-medium') : item.battery <= high ? setBatteryIconLevel('battery-high') : null


    return (

      <>
        <TouchableWithoutFeedback>
          <View style={{}}>
            <View style={{ backgroundColor: 'white', paddingBottom: spacing, paddingHorizontal: spacing * 2, paddingVertical: spacing, marginBottom: spacing * 2, borderRadius: spacing / 2, shadowColor: grayText, shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { width: 1, height: 2 } }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Image source={{ uri: item.img }} style={{ width: 30, height: 30, borderRadius: 100 }} />
                  <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: grayText, marginLeft: spacing * 2 }}>{item.name}</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: spacing }}>
                    <IconM name={batteryIconLevel} size={18} color={colorOne} />
                    <Text style={{ color: grayText, fontSize: 10, fontWeight: '500' }}>{item.battery}%</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconM name='map-marker' size={18} color={colorOne} />
                    <Text style={{ color: grayText, fontSize: 10, fontWeight: '500' }}>{item.gps ? 'on' : 'off'}</Text>
                  </View>

                </View>
              </View>
              <View style={{ marginVertical: spacing }}>
                <Divider width="110%" color={textColor} height={.5} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <IconMI name="assistant-direction" size={22} color={grayText} />
                <IconM name="message-outline" size={22} color={grayText} />
                <IconM name="phone-outline" size={22} color={grayText} />
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

      <View style={{ backgroundColor: colorOne }}>
        <View style={{ backgroundColor: 'white', borderTopRightRadius: spacing, borderTopLeftRadius: spacing }}>

          <View style={{ paddingHorizontal: spacing * 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing }}>
            <View style={{ flexDirection: 'column', width: '90%', justifyContent: 'center', }}>
              <SearchBar isOpen={searchVisible} />
            </View>

            <TouchableWithoutFeedback>
              <View style={{ width: '10%', elevation: 4, alignItems: 'flex-end', justifyContent: 'flex-end', }}>
                <IconM name="download-circle-outline" size={28} color={colorOne} />
              </View>
            </TouchableWithoutFeedback>
          </View>




          <View style={{}}>

            <FlatList data={techListData}
              keyExtractor={item => item.id}
              contentContainerStyle={{ padding: spacing * 2, }}
              renderItem={({ item }) => (<TechCard item={item} />)}
            />



          </View>
        </View>
      </View>
    </>
  )
}

export default TechnicianList

const styles = StyleSheet.create({})