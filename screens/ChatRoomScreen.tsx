import React from 'react';
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native"
import { FlatList } from 'react-native-gesture-handler';
import ChatMessage from '../components/ChatMessage';
import chats from '../data/chats';
import InputMessage from '../components/InputMessage';

const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <View style = {{ width: "100%", height: "100%" }}>
         <FlatList
           style = {{ paddingTop: 10 }} 
           data = { chats.messages } 
           renderItem = { ({item}) =>  <ChatMessage message={item}/>}
         />
         <InputMessage/>
        </View>
    )
}

export default ChatRoomScreen;