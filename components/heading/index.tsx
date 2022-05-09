import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
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
                <TextInput style={styles.textInput} placeholder='Search'/>
            </View>
            
        </View>
        <View style={styles.locationContainer}>
            <Text style={styles.locationText}>London</Text>
        </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderWidth: 1, 

    },
    searchContainer: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: '80%',
        width: '90%',
        borderRadius: 80
    },
    textInput: {
        borderWidth: 1
    },
    locationContainer: {
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center'
    },
    locationText: {
        color: 'white', 
        fontSize: 40, 
        fontWeight: '700'
    }
})