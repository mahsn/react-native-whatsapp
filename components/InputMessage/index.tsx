import React from 'react'
import { Text, View } from 'react-native'
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from '../InputMessage/styles'
import { TextInput } from 'react-native-gesture-handler'

const InputMessage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
                <TextInput style={styles.textInput}/>
                <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
                <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
            </View>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="microphone" size={24} color="white"/>
            </View>
        </View>
    )
}

export default InputMessage
