import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
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
