import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from '../../../theme/Theme'

type Props = {
    location: string
    timezone: number
    date: number
}

const CityDate = (props: Props) => {
    const date = new Date((props.date + props.timezone) * 1000)
    const day = date.getUTCDate()
    const month = date.getUTCMonth()
    const year = date.getUTCFullYear()
  return (
    <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{props.location}</Text>

        <Text style={styles.date}>{day} / {month + 1} / {year}</Text>
    </View>
  )
}

export default CityDate

const styles = StyleSheet.create({
    locationContainer: {
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Theme.padding.paddingHorizontal,
    },
    locationText: {
        color: 'white', 
        fontSize: 26, 
        fontWeight: '700',
    },
    date: {
        fontWeight: '300',
        color: 'white', 
    },
})