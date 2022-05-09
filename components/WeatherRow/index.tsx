import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const WeatherRow = (props: Props) => {
  return (
    <View style={styles.weatherRow}>
        <View style={styles.dayContainer}>
            <Text>Thursday</Text>
        </View>
        <View style={styles.iconContainer}>

        </View>
        <View style={styles.minMaxTempContainer}>

        </View>
    </View>
  )
}

export default WeatherRow

const styles = StyleSheet.create({
    weatherRow: {
        height: '14.28%',
        borderWidth: 1
      },
    dayContainer: {

    },
    iconContainer: {

    },
    minMaxTempContainer: {

    }

})