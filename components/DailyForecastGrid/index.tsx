import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WeatherRow from './parts/WeatherRow'

type Props = {
    data: any,
}

const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];



const DailyForecastGrid = (props: Props) => {
    const {dailyForecast, current} = props.data
    const currentDay = new Date(current.dt * 1000).getDay()


    
  return (
    <View style={styles.weatherRowContainer}>
        <WeatherRow day={WEEK_DAYS[currentDay]} icon={current.weather[0].main}/>
        {dailyForecast.map((data) => {
            const day = new Date(data.dt * 1000).getDay()
            const dailyWeather = data.weather[0].main
            const dailyWeatherIcon = dailyWeather
            console.log(dailyWeather)
      
            return <WeatherRow day={WEEK_DAYS[day]} icon={dailyWeatherIcon}/>
        })}

    </View>
  )
}

export default DailyForecastGrid

const styles = StyleSheet.create({
    weatherRowContainer: {
        height: '80%',
      },
})