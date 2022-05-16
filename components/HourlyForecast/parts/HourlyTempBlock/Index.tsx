import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

type Props = {
    hour: string
    temp: number | string
}

const HourlyTempBlock = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.hourContainer}>
            <Text style={styles.hourText}>{props.hour}</Text>
        </View>
        <View style={styles.tempContainer}>
            <Text style={styles.tempText}>{props.temp}°</Text>
        </View> 
    </View>
  )
}

export default HourlyTempBlock

const styles = StyleSheet.create({
    container: {
        width: '20%',
        borderColor: 'white',
        borderRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    hourContainer: {

    },
    tempContainer: {

    },
    hourText: {
        color: 'grey',
        fontWeight: '300',
        fontSize: 14
    },
    tempText: {
        color: 'white',
        fontWeight: '300',
        fontSize: 16
    }
})