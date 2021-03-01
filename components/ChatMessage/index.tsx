import React from 'react'
import moment from 'moment'
import {Text, View, Image} from 'react-native'
import {Message} from '../../types';
import styles from './styles';

export type ChatMessageProps = {
    message: Message
}

const ChatMessageItems = ( props: ChatMessageProps) => {
    const {message} = props;
    
    const isMyMessage = () => {
        return message.user.id === 'u1'
    }



    return (
    <View style={styles.container}>
        <View style=
            {[
                styles.rightContainer, 
                {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : '#FFF',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
               
            ]}>
                 <View style={styles.midContainer}>
                 { !isMyMessage() && <Text style={styles.username}>{message.user.name}</Text>}
                    <Image source={{uri: message.user.imageUri}} style={styles.avatar}/>
                 </View>
                <Text ellipsizeMode={'tail'} style={styles.message} >{message.content}</Text>
                <Text style={styles.createdAt}>{moment(message.createdAt).fromNow()}</Text>
            </View>
          
    </View>
    )
}

export default ChatMessageItems
