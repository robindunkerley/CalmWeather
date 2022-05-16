import { StyleSheet, Text, View, Dimensions, TextInput,  TextInputProps } from 'react-native'
import * as Icon from 'react-native-feather'
import Theme from '../../theme/Theme'
import React, { useCallback } from 'react'
import axios from 'axios'
import CityDate from './parts/CityDate'
import WeatherDescription from './parts/WeatherDescription'

const {height, width} = Dimensions.get('screen')

interface Props extends TextInputProps {
data: any
}

const Header = (props: Props) => {

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.textInputContainer}>
                <Icon.Search height={18} color='skyblue'/>
                <TextInput style={styles.textInput} placeholder='Search a city...' {...props}/>
            </View>
        </View>
        {!!props.data && (
            <>
                <CityDate location={props.data?.name}/>
                <WeatherDescription description={props.data?.weather[0].description} temperature={Math.round(props.data?.main.temp)}/>
            </>
        )}

  
      
    </View>
  )
}



export default Header

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-around',
    },
    searchContainer: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: '80%',
        width: '90%',
        borderRadius: 80,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
    },
    textInput: {
        flex: 1,
        marginHorizontal: '2%',
        height: '100%',
        justifyContent: 'center',
        fontSize: 12
    },


})