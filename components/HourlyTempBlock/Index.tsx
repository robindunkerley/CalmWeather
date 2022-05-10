import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const HourlyTempBlock = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.hourContainer}>
            <Text>1pm</Text>
        </View>
        <View style={styles.tempContainer}>
            <Text>23°</Text>
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

    }
})