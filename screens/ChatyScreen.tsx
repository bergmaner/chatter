import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from "../data/chatRoom";
import { FlatList, View } from 'react-native';
import chatRooms from '../data/chatRoom';

 const ChatyScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem style={{ width: "100%"}} chatRoom={item}/> }
        keyExtractor = { (item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 10


  }
});

export default ChatyScreen;
