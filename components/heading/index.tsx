import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import * as Icon from 'react-native-feather'
import Theme from '../../theme/Theme'
import React from 'react'

const {height, width} = Dimensions.get('screen')

type Props = {}

const Header = (props: Props) => {
    const [time, setTime] = React.useState('Day')

    
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.textInputContainer}>
                <Icon.Search height={18} color='#ff6347'/>
                <TextInput style={styles.textInput} placeholder='...Search a location'/>
            </View>
        </View>
        <View style={styles.locationContainer}>
            <Text style={styles.locationText}>London</Text>
        </View>
        <View style={styles.weatherDetailsContainer}>
            <View style={styles.weatherDetailsBlock}>
                <Text style={styles.temperature}>23°</Text>
            </View>
            <View style={styles.weatherDetailsBlock}>
                <Text style={styles.weatherType}>Sunny</Text>
            </View>
            <View style={styles.weatherDetailsBlock}>

            </View>
        </View>
      
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
        borderWidth: 0.5,
        borderColor: 'lightgrey'
    },
    textInput: {
        flex: 1,
        marginHorizontal: '2%',
        fontSize: 12
    },
    locationContainer: {
        height: '20%',
        paddingHorizontal: Theme.padding.paddingHorizontal
    },
    locationText: {
        color: 'black', 
        fontSize: 26, 
        fontWeight: '700',
    },
    weatherDetailsContainer: {
        paddingHorizontal: Theme.padding.paddingHorizontal,
        flexDirection: 'row',
        height: '30%'
    },
    weatherDetailsBlock: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    temperature: {
        fontSize: 28,
        fontWeight: '200'
    },
    weatherType: {
        fontSize: 28,
        fontWeight: '200'
    }

})