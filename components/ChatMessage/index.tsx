import React from 'react'
import {Text, View} from 'react-native'
import {Message} from '../../types';
import styles from './styles';

export type ChatMessageProps = {
    message: Message
}

const ChatMessageItems = ( props: ChatMessageProps) => {
    const {message} = props;
    
    return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
                <View style={styles.midContainer}> 
                <Text style={styles.username}>{message.user.name}</Text> 
                    <Text ellipsizeMode={'tail'} style={styles.message} >{message.content}</Text>
                </View>
            </View>
    </View>
    )
}

export default ChatMessageItems
