import { StyleSheet, Text, View, Dimensions } from 'react-native'
import * as Icon from 'react-native-feather'
import React from 'react'

type Props = {
    hour: string
    temp: number | string
    icon: string
    timeOfDay: string
}



const ICON_SIZE = 16;
const STROKE_WIDTH = 1.5;
const ICON_COLOR = 'white'

const icons = {
    "Clouds": <Icon.Cloud strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
    "Clear": <Icon.Sun strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
    "Rain": <Icon.CloudRain strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
    "Thunderstorm": <Icon.CloudLightning strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
    "Snow": <Icon.CloudSnow strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
    "Drizzle": <Icon.CloudDrizzle strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
    "Mist": <Icon.Cloud strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
    'Moon': <Icon.Moon strokeWidth={STROKE_WIDTH} height={ICON_SIZE} color={ICON_COLOR}/>,
}


const HourlyTempBlock = (props: Props) => {

  return (
    <View style={styles.container}>
        <View style={styles.hourContainer}>
            <Text style={styles.hourText}>{props.hour}</Text>
        </View>
        <View style={styles.iconContainer}>
            {
            props.timeOfDay === 'night' && props.icon === "Clear" ? icons["Moon"] : icons[props.icon]}
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
        justifyContent: 'center',
        alignItems: 'center'

    },
    hourContainer: {
        marginBottom: '15%'
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
        fontSize: 12
    }
})