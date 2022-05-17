import { SegmentedControlIOSComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HourlyTempBlock from './parts/HourlyTempBlock/Index'
import { data } from '../../data'

type Props = {
    data: any
    timezone: number
}




function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ampm;
    return strTime;
  }

const HourlyForecast = (props: Props) => {





  return (
    <View style={styles.hourlyTempContainer}>
        {props.data.map((hour) => {
          const convertedHour = new Date((hour.dt + props.timezone) * 1000)
          const timeOfDay = convertedHour.getHours() > 18 ? 'night' : 'day'
          const hourConverted = formatAMPM(convertedHour)
          const temperature = Math.round(hour.temp)
          const icon = hour.weather[0].main
          return <HourlyTempBlock key={hour.dt} icon={icon} hour={hourConverted} temp={temperature} timeOfDay={timeOfDay}/>
          
        })}
    </View>
  )
}

export default HourlyForecast

const styles = StyleSheet.create({
    hourlyTempContainer: {
        height: '18%',
        flexDirection: 'row', 
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      }
})