import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from '../../../theme/Theme'

type Props = {
    temperature: number
    description: string
}

const WeatherDescription = (props: Props) => {
  return (
    <View style={styles.weatherDetailsContainer}>
        <View style={styles.temperatureBlock}>
            <Text style={styles.temperature}>{props.temperature}°</Text>
        </View>
        <View style={styles.weatherTypeBlock}>
            <Text style={styles.weatherType}>{props.description}</Text>
        </View>
    </View>
  )
}

export default WeatherDescription

const styles = StyleSheet.create({

    weatherDetailsContainer: {
        paddingHorizontal: Theme.padding.paddingHorizontal,
        flexDirection: 'row',
        justifyContent: 'center',
        height: '30%'
    },
    temperatureBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    weatherTypeBlock: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '75%'
    },
    temperature: {
        color: 'white', 
        fontSize: 28,
        fontWeight: '200'
    },
    weatherType: {
        color: 'white', 
        fontSize: 28,
        fontWeight: '200'
    }
})