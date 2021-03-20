import React from 'react';
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native"
import { FlatList } from 'react-native-gesture-handler';
import ChatMessage from '../components/ChatMessage';
import chats from '../data/chats';

const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <FlatList
          style = {{ paddingTop: 10 }} 
          data = { chats.messages } 
          renderItem = { ({item}) =>  <ChatMessage message={item}
          inverted
          /> 
          
        }
        />
    )
}

export default ChatRoomScreen;