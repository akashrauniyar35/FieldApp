import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';



const colorOne = '#01151A';
const spacing = 10;
const purple = '#816AF8';
const yellow = '#FEE700';
const redOne = '#FF6B40'
const blueOne = '#2D9AFE'
const black = '#505D6D'
const greenOne = '#2BD9C5'



const StripCalander = () => {
    const [date, setDate] = useState(new Date());
    console.log('datesss', date)

    return (
        <View style={styles.container}>
            <CalendarStrip
                scrollable
                showMonth={false}
                selectedDate={date}
                daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
                calendarColor={colorOne}
                highlightDateNumberStyle={{ color: 'white' }}
                highlightDateNameStyle={{ color: 'white' }}
                iconLeft={null}
                iconRight={null}
                calendarHeaderStyle={{ color: 'white' }}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                onDateSelected={date => setDate(date.toString())}
                style={{ height: 80, marginBottom: 80 }}
                dayContainerStyle={{}}
            />
        </View>
    )
}

export default StripCalander

const styles = StyleSheet.create({
    container: { flex: 1 },
    dateNameStyle: {},
    dateNumberStyle: {}
})