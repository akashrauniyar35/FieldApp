import { StyleSheet, Text, View, Dimensions, StatusBar, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('screen')




const ModalTwo = () => {

    return (
        <>
            {/* <StatusBar hidden={true} /> */}
            <View style={{ backgroundColor: 'white', height: height }}>
                <Text>ModalTwo</Text>
            </View>
        </>
    )
}

export default ModalTwo

const styles = StyleSheet.create({})