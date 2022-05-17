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
  Alert,
} from 'react-native';
import { data as apiCall } from './data';
import { Cloudy } from './components/Glassmorphism/components/graphics/Cloudy';
import { Icey } from './components/Glassmorphism/components/graphics/Icey';
import { Sunny } from './components/Glassmorphism/components/graphics/Sunny';
import Header from './components/heading';
import Theme from './theme/Theme';
import DailyForecastGrid from './components/DailyForecastGrid';
import HourlyForecast from './components/HourlyForecast';
import { Offset } from '@shopify/react-native-skia';
import { ClearNight } from './components/Glassmorphism/components/graphics/ClearNight';
const {height, width} = Dimensions.get('screen')


const App = () => {
  const [location, setLocation] = React.useState<string>('')
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<any>({...apiCall})
  const [latLon, setLatLon] = React.useState({lat: 51.5072, lon: 0.1276})
  const [dailyHourlyData, setDailyHourly] = React.useState({})



const api = {
    key: '75fa491ce9bcddf0985eee1a9f4a8678',
}



const fetchDataHandler = useCallback(() => {
    axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api.key}`,
    }).then(res => {
        const lat = res.data.coord.lat
        const lon = res.data.coord.lon
        setLatLon({lat: lat, lon: lon})
        getData(lat, lon)
      }).catch(e => console.dir(e)).finally(() => {setLoading(false)})

}, [location, data])

const getData = (lat: number, lon: number) => {
  axios({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latLon.lat}&lon=${latLon.lon}&exclude=minutely,alerts&units=metric&appid=${api.key}`
    }).then((res) => {
      setData({...res.data})
    })
}

React.useState(() => {

}, [data])

const hourlyData = data.hourly.slice(0, 5)
const dailyData = data.daily.slice(0, 7)
const timezoneOffset = data['timezone_offset']
const currentData = hourlyData[0]
const convertedCurrentHour = new Date((currentData.dt + timezoneOffset) * 1000).getHours()
const timeOfDay = convertedCurrentHour > 18 ? 'night' : 'day'



const findBackground = (weatherType: string, temperature: number, timeOfDay: string) => {
  let rtn = <Cloudy/>
  if(timeOfDay === 'day') {
    if(temperature <= 0) {
      rtn = <Icey/>
    } else if(weatherType ==='Clouds') {
      rtn = <Cloudy/>
    } else if (weatherType === 'Clear' ) {
      rtn = <Sunny/>
    } 
  } else {
    rtn = <ClearNight/>
  }
  return rtn
}





  return (
    <View style={{height: '100%'}}>

        {/* Graphics under layer */}
        <View style={{height: '100%'}}>
          {findBackground(currentData.weather[0].main, currentData.temp, timeOfDay)}
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
            <Header data={currentData} onChangeText={text => setLocation(text)} value={location} onChange={event => setLocation(event.target.value)} timezone={timezoneOffset} onSubmitEditing={fetchDataHandler}/>
        </View>

        <View style={{height: height * 0.45, position: 'absolute', top: height / 2 , width: '100%', paddingHorizontal: Theme.padding.paddingHorizontal, marginTop: 10, justifyContent: 'space-around'}}>
          <HourlyForecast data={hourlyData} timezone={timezoneOffset}/>
          <DailyForecastGrid data={dailyData}/>
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
