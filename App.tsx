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
import HourlyTempBlock from './components/HourlyTempBlock/Index';
import WeatherRow from './components/WeatherRow';
import Theme from './theme/Theme';
const {height, width} = Dimensions.get('screen')


const App = () => {
  const [location, setLocation] = React.useState<string>('')
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<any>([])

  const api = {
    key: '75fa491ce9bcddf0985eee1a9f4a8678',
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
}

const fetchDataHandler = useCallback(() => {
    axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api.key}`,
    }).then(res => {
        console.log(res.data)
        setData(res.data)
    }).catch(e => console.dir(e)).finally(() => {setLoading(false)})

}, [api.key, location])


  return (
    <View style={{height: '100%'}}>

        {/* Graphics under layer */}
        <View style={{height: '100%'}}>
          {/* <Sunny/> */}
          <Cloudy/>
          {/* <Icey/> */}

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
          <View style={styles.hourlyTempContainer}>
          <HourlyTempBlock/>
          <HourlyTempBlock/>
          <HourlyTempBlock/>
          <HourlyTempBlock/>
          <HourlyTempBlock/>
          </View>
          <View style={styles.weatherRowContainer}>
            <WeatherRow day='Monday'/>
            <WeatherRow day='Tuesday'/>
            <WeatherRow day='Wednesday'/>
            <WeatherRow day='Thursday'/>
            <WeatherRow day='Friday'/>
            <WeatherRow day='Saturday'/>
            <WeatherRow day='Sunday'/>
          </View>
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
    weatherRowContainer: {
      height: '80%',
    },
    hourlyTempContainer: {
      height: '18%',
      flexDirection: 'row', 
      borderRadius: 10,
      borderColor: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }

});

export default App;
