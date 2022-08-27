import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('screen')

const w = width * .95;
const colorOne = '#01151A';
const colorTwo = '';
const colorThree = '';
const textColor = 'white';
const grayText = '#2e2e2e'
const grayTextTwo = '#6e6e6e'
const spacing = 10;
const red = '#C10000'
const green = '#48a14d'
const blue = '#007792'
const orange = '#E05500'
const borderColor = '#7E7E7E'

const Recorder = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={{ position: 'absolute', top: 10, alignSelf: 'center', fontSize: 12, color: grayText }}>Record your instructions(Limit up to 30 Sec)</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
                    <View style={[styles.icon, { backgroundColor: colorOne }]} >
                        <Icon name="play-outline" size={28} color={textColor} />
                    </View>
                    <View style={[styles.icon, { width: 70, height: 70, position: 'relative' }]} >
                        <Icon name="mic-outline" size={38} color={textColor} />
                        <Text style={{ position: 'absolute', bottom: -25, color: grayText }}>00:00</Text>
                    </View>
                    <View style={[styles.icon, { backgroundColor: grayTextTwo }]} >

                        <Icon name="stop-outline" size={28} color={textColor} />
                    </View>
                </View>

            </View>
        </>
    )
}
export default Recorder

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        backgroundColor: '#ECECEC',
        borderColor: '#ECECEC',
        padding: spacing * 4,
        borderRadius: 20,
        shadowRadius: 10, shadowColor: '#ECECEC', shadowOpacity: 0.4, shadowOffset: { width: 5, height: 10 },
        alignItems: 'center',
    },
    icon: {
        width: 50, height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: red
    }
})