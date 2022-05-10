import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import * as Icon from 'react-native-feather'
import Theme from '../../theme/Theme'
import React, { useCallback } from 'react'

const {height, width} = Dimensions.get('screen')

type Props = {}

const Header = (props: Props) => {
    const [input, setInput] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])

    const fetchDataHandler = useCallback(() => {

    }, [])

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <View style={styles.textInputContainer}>
                <Icon.Search height={18} color='skyblue'/>
                <TextInput onChangeText={text => setInput(text)} value={input} style={styles.textInput} placeholder='Search a location...'/>
            </View>
        </View>
        <View style={styles.locationContainer}>
            <Text style={styles.locationText}>London</Text>
            <Text style={styles.date}>10th May 2022</Text>
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
    locationContainer: {
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Theme.padding.paddingHorizontal
    },
    locationText: {
        color: 'black', 
        fontSize: 26, 
        fontWeight: '700',
    },
    date: {
        fontWeight: '200'
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