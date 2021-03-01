import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row'

    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor:'#fff',
        padding: 10,
        borderRadius: 50,
        marginRight: 5,
        flex: 1
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    icon: {
        marginHorizontal: 5
    }
});


export default styles;