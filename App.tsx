import axios from 'axios';
import React, { useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import { Glassmorphism } from './components/Glassmorphism';
import { Cloudy } from './components/Glassmorphism/components/graphics/Cloudy';
import { Icey } from './components/Glassmorphism/components/graphics/Icey';
import { Sunny } from './components/Glassmorphism/components/graphics/Sunny';
import Header from './components/heading';
import HourlyTempBlock from './components/HourlyForecast/parts/HourlyTempBlock/Index';
import WeatherRow from './components/DailyForecastGrid/parts/WeatherRow';
import Theme from './theme/Theme';
import DailyForecastGrid from './components/DailyForecastGrid';
import HourlyForecast from './components/HourlyForecast';
import { Offset } from '@shopify/react-native-skia';
const {height, width} = Dimensions.get('screen')


const App = () => {
  const [location, setLocation] = React.useState<string>('')
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<any>([])
  const [dailyHourlyData, setDailyHourly] = React.useState({})



  const api = {
    key: '75fa491ce9bcddf0985eee1a9f4a8678',
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
}

const getFiveHours = (data, offset) => {
  let unixHours = []
  for(let i = 0; i < 5; i++) {
    unixHours.push(data[i].dt)
  }
  return unixHours.map((unix) => {
    return new Date((unix + offset) * 1000)
  })
}

const createHourlyForecast = (data) => {
  let rtn = []
  for(let i = 0; i < 5; i++) {
    rtn.push(Math.round(data[i].temp))
  }
  return rtn
}



const getWeek = (data) => {
  let week = [];
    for(let i = 0; i < 7; i++) {
      week.push(data[i])
    }
  return week
}

const fetchDataHandler = useCallback(() => {
    axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api.key}`,
    }).then(res => {
        setData(res.data)
        const lat = data?.coord.lat
        const lon = data?.coord.lon
        axios({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${api.key}`
        }).then(onecall => {
          // const date = new Date(onecall.data.hourly)
          const currentData = onecall.data.current
          const hourlyArray = onecall.data.hourly
          const timeOffset = onecall.data["timezone_offset"]
          const fiveHours = getFiveHours(hourlyArray, timeOffset)
          const hourlyTemperature = createHourlyForecast(hourlyArray)
          const week = getWeek(onecall.data.daily)
          setDailyHourly({dailyForecast: week, hourlyForecast: {'hours': fiveHours, 'temps': hourlyTemperature}})
    

        })
    }).catch(e => console.dir(e)).finally(() => {setLoading(false)})



}, [api.key, location, dailyHourlyData])











  return (
    <View style={{height: '100%'}}>

        {/* Graphics under layer */}
        <View style={{height: '100%'}}>
          {/* <Sunny/> */}
          {/* <Cloudy/> */}
          <Icey/>

        </View>

        <View style={{height: '100%', width: '100%', position: 'absolute'}}>
          <SafeAreaView/>
        {!!loading ? (
          <View style={{height: '45%', justifyContent: 'flex-end'}}>
            <ActivityIndicator size={'large'}/>
          </View>
        ) : (
          <>

        <View style={styles.heading}>
            <Header data={data} onChangeText={text => setLocation(text)} value={location} onChange={event => setLocation(event.target.value)} onSubmitEditing={fetchDataHandler}/>
        </View>

        <View style={{height: height * 0.45, position: 'absolute', top: height / 2 , width: '100%', paddingHorizontal: Theme.padding.paddingHorizontal, marginTop: 10, justifyContent: 'space-around'}}>
          <HourlyForecast data={dailyHourlyData['hourlyForecast']}/>
          <DailyForecastGrid data={dailyHourlyData}/>
        </View> 
        </>
          
        )}

        </View>



      </View>






 
    

  );
};

const styles = StyleSheet.create({
    heading: {
      height: '20%',
    },


});

export default App;
