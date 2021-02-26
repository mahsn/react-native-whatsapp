import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row',
        marginRight: 80
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius:  50
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey'
    },
    time: {
        fontSize: 16,
        color: 'grey'
    }
});

export default styles;