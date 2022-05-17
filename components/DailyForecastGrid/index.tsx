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

const daily = {
    "clouds": 81,
    "dew_point": 8.98,
    "dt": 1652958000,
    "feels_like": {
        "day": 19.39,
        "eve": 18.73,
        "morn": 13.33,
        "night": 14.17
    },
    "humidity": 49,
    "moon_phase": 0.63,
    "moonrise": 1652916360,
    "moonset": 1652941440,
    "pop": 0.98,
    "pressure": 1019,
    "rain": 0.6,
    "sunrise": 1652932997,
    "sunset": 1652989855,
    "temp": {
        "day": 20.05,
        "eve": 19.47,
        "max": 20.49,
        "min": 13.48,
        "morn": 13.54,
        "night": 14.78
    },
    "uvi": 6.01,
    "weather": [{
        "description": "light rain",
        "icon": "10d",
        "id": 500,
        "main": "Rain"
    }],
    "wind_deg": 259,
    "wind_gust": 6.74,
    "wind_speed": 3.79
}

const DailyForecastGrid = (props: Props) => {




    
  return (
    <View style={styles.weatherRowContainer}>

        {props.data.map((data) => {
            const day = new Date(data.dt * 1000).getDay()
            const dailyWeatherIcon = data.weather[0].main
            const minTemp = Math.round(data.temp['min'])
            const maxTemp = Math.round(data.temp['max'])
            return <WeatherRow day={WEEK_DAYS[day]} icon={dailyWeatherIcon} minTemp={minTemp} maxTemp={maxTemp}/>
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