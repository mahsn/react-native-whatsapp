import { StyleSheet } from "react-native";
import  Colors  from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    rightContainer: {
        borderRadius: 1,
        padding: 10
        
    },
    midContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    username: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginVertical: 5
    },
    message: {
        
    },
    createdAt: {
        alignSelf: 'flex-end',
        color: 'grey'
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius:  50
    },

});


export default styles;