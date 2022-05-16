import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HourlyTempBlock from './parts/HourlyTempBlock/Index'
import { data } from '../../data'

type Props = {
    data: any
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
    console.log(props.data)




  return (
    <View style={styles.hourlyTempContainer}>
        {props.data['hours'].map((date, index) => {
            const hour = formatAMPM(date)
            return <HourlyTempBlock hour={hour} temp={props.data['temps'][index]}/>
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