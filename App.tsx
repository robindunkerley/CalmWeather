/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
import Header from './components/heading';
const {height, width} = Dimensions.get('screen')


const App = () => {


  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={styles.heading}>
        <Header/>
      </View>
      <View style={{height: '80%'}}>
        <Glassmorphism/>
      </View>
      <View style={{height: height * 0.4, borderWidth: 1, position: 'absolute', top: height / 2, width: '100%'}}>

      </View>
        


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    heading: {
      height: '20%',
      backgroundColor: 'black'
    },

});

export default App;
