import React from 'react';
import {Text, View, FlatList} from  'react-native';
import {useRoute} from '@react-navigation/native';
import styles from '../components/ChatListItem/styles';
import chats from '../data/Chats';
import ChatMessage from '../components/ChatMessage/index';

const ChatRoomScreen = () => {

    const route  = useRoute();
    return (
        <View  style={styles.container}>
            <FlatList  
            data={chats.messages} 
            renderItem={({item}) => <ChatMessage message={item}/>}
            keyExtractor={(item) => item.id}  
            />
        </View>
    );
}

export default ChatRoomScreen;