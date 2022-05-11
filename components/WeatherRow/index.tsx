import { StyleSheet, Text, View, Dimensions } from 'react-native'
import * as Icon from 'react-native-feather'
import React from 'react'
import Theme from '../../theme/Theme'

const {width, height} = Dimensions.get('screen')

const dayContainerWidth = (width * 0.42) - (width * 0.03)
const iconContainerWidth = dayContainerWidth
const minMaxTempContainerWidth = width - (dayContainerWidth + iconContainerWidth)

type Props = {
    day: string
    icon: string
}


const WeatherRow = (props: Props) => {
  return (
    <View style={styles.weatherRow}>
        <View style={styles.dayContainer}>
            <Text style={styles.dayText}>{props.day}</Text>
        </View>
        <View style={styles.iconContainer}>
            <Icon.Sun strokeWidth={1.5} height={16} color='white'/>
        </View>
        <View style={styles.minMaxTempContainer}>
            <View style={styles.maxTemp}>
                <Text style={styles.maxTempText}>21</Text>
            </View>
            <View style={styles.minTemp}>
                <Text style={styles.minTempText}>12</Text>
            </View>
        </View>
    </View>
  )
}

export default WeatherRow

const styles = StyleSheet.create({
    weatherRow: {
        height: '14.28%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.25,
        borderColor: 'white'
    },
    dayContainer: {
        width: '45%',
        height: '100%',
        justifyContent: 'center'
    },
    dayText: {
        color: 'white',
        fontWeight: '200',
        fontSize: 16
    },
    iconContainer: {
        width: '35%',
        justifyContent: 'center',
        height: '100%'
    },
    minMaxTempContainer: {
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '20%'
    },
    maxTemp: {
        borderRightWidth: 0.25,
        borderColor: 'white',
        flex: 0.5,
        alignItems: 'center'
    },
    maxTempText: {
        color: 'white',
        fontWeight: '300'
    },
    minTemp: {
      flex: 0.5,
      alignItems: 'center'
    },
    minTempText: {
        fontWeight: '400',
        color: 'lightgrey'
    }
})