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
            <Text>{props.day}</Text>
        </View>
        <View style={styles.iconContainer}>
            <Icon.Sun height={18} color='white'/>
        </View>
        <View style={styles.minMaxTempContainer}>
            <View style={styles.maxTemp}>
                <Text>21</Text>
            </View>
            <View style={styles.minTemp}>
                <Text>12</Text>
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
        alignItems: 'center'
    },
    dayContainer: {
        width: '45%'
    },
    iconContainer: {
        width: '35%'
    },
    minMaxTempContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '20%'
    },
    maxTemp: {
        borderRightWidth: 0.5,
        flex: 0.5,
        alignItems: 'center'
    },
    minTemp: {
      flex: 0.5,
      alignItems: 'center'

    }
})