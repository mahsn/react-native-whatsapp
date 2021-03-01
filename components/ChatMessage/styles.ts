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
    }

});


export default styles;