import React from 'react';
import { View, Text, Image } from 'react-native';
import {ChatRoom} from '../../types';
import styles from './styles';

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem =  (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    console.log(user.imageUri);
    return (
        <View style={styles.container}>
           <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>    
                    <Text style={styles.lastmessage}> {chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
    )    
};


export default ChatListItem;