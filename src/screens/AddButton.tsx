import { SafeAreaView, StyleSheet, Text, Dimensions, View } from 'react-native'
import React, { useState } from 'react'
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CardAnimationContext } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import AddTaskModal from '../components/AddTaskModal';

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


const addData = [

  {
    id: '00',
    title: 'Add Enquiry',
    icon: 'assignment'
  },
  {
    id: '01',
    title: 'Add Task',
    icon: 'article'
  },
  {
    id: '02',
    title: 'Get Link',
    icon: 'link-variant'
  },

  {
    id: '03',
    title: 'Add Item',
    icon: 'cube'
  },
  {
    id: '04',
    title: 'Add Others',
    icon: 'send-to-mobile'
  },
  {
    id: '05',
    title: 'Assign Item',
    icon: 'post-add'
  },
  {
    id: '06',
    title: 'Add AMC',
    icon: 'cube'
  },

  {
    id: '07',
    title: 'Add Technician',
    icon: 'engineering'
  },

]


const AddButton = ({ navigation }) => {
  const [visible, setVisible] = useState(false)


  const customAdd = () => {
    return (
      <View style={{}}>
        <View style={{ backgroundColor: textColor, borderRadius: 100, position: 'relative', alignItems: 'center', width: 32, height: 32, justifyContent: 'center', }}>
          <Text style={{ color: colorOne, fontWeight: '800', fontSize: 10, }}>AMC</Text>
        </View>
      </View>
    )
  }

  const toggleVisible = () => {
    setVisible(!visible)
  }


  const displayItems = (item) => {
    return (
      <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
        <View style={{ width: item.title == "Add Technician" ? width * .35 : width * .25, height: item.title == "Add Technician" ? width * .22 : width * .22, backgroundColor: colorOne, paddingTop: spacing, alignItems: 'center', margin: spacing, borderRadius: 4, flexDirection: 'column', justifyContent: "space-between", position: 'relative', }}>
          {item.title === 'Add Item' ? <Icon color={textColor} style={{ position: 'relative', alignSelf: "center", }} name={item.icon} size={38} /> : item.title === 'Add AMC' ? customAdd() : item.title === 'Get Link' ? <IconMC color={textColor} style={{ position: 'relative', alignSelf: "center", }} name={item.icon} size={38} /> : <IconM color={textColor} style={{ position: 'relative', alignSelf: "center", }} name={item.icon} size={38} />
          }
          <Text style={{ marginTop: spacing, fontSize: 12, color: textColor, paddingBottom: spacing, fontWeight: '600', }}>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback >
    )
  }


  return (
    <View>
      <SafeAreaView style={{ backgroundColor: colorOne }} />
      <Header nav={navigation} />


      <View style={{ backgroundColor: colorOne, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '100%', alignSelf: 'center', padding: spacing, backgroundColor: 'white', borderTopRightRadius: spacing, borderTopLeftRadius: spacing, }}>

          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            numColumns={3}
            // contentContainerStyle={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}
            data={addData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => displayItems(item)} />
        </View>
      </View>
      {visible && <AddTaskModal isOpen={visible} onPress={toggleVisible} onClose={toggleVisible} />}
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({})