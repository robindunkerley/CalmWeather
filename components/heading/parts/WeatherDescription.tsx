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
        <View style={styles.temperatureBlock}>
       
        </View>
    </View>
  )
}

export default WeatherDescription

const styles = StyleSheet.create({

    weatherDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '30%',
    },
    temperatureBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%'
    },  
    weatherTypeBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
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