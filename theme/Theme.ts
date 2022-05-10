import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('screen')

const Theme = {
    day: {
        backgroundColor: 'white',
        text: {
            primary: 'black',
            secondary: 'grey'
        }
    },
    night: {
        backgroundColor: 'black',
        text: {
            primary: 'white',
            secondary: 'grey'
        }
    },
    padding: {
        paddingHorizontal: width * 0.05
    }
    
}

export default Theme