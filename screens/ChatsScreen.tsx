import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ChatListItem from '../components/ChatListItem/index';
import chatRooms from '../data/ChatsRooms';


export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList  
      data={chatRooms} 
      renderItem={({item}) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
