import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import { Glassmorphism } from './components/Glassmorphism';
import { Icey } from './components/Glassmorphism/components/graphics/Icey';
import { Sunny } from './components/Glassmorphism/components/graphics/Sunny';
import Header from './components/heading';
import HourlyTempBlock from './components/HourlyTempBlock/Index';
import WeatherRow from './components/WeatherRow';
import Theme from './theme/Theme';
const {height, width} = Dimensions.get('screen')


const App = () => {
  const [timeOfDay, setTimeOfDay] = React.useState('day')

  const style = timeOfDay === 'day' ? Theme.day : Theme.night


  return (
    <View style={{height: '100%'}}>

        {/* Graphics under layer */}
        <View style={{height: '100%'}}>
          {/* <Sunny/> */}
          <Icey/>
        </View>

        <View style={{height: '100%', width: '100%', position: 'absolute'}}>
          <SafeAreaView/>
          <View style={styles.heading}>
            <Header/>
          </View>

        <View style={{height: height * 0.45, position: 'absolute', top: height / 2 , width: '100%', paddingHorizontal: Theme.padding.paddingHorizontal, marginTop: 10}}>
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

        </View>


        {/* Blur Box Content Container */}

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
      height: '20%',
      flexDirection: 'row'
    }

});

export default App;
