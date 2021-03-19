import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import { Text } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {

    const { chatRoom } = props;
    
    const navigation = useNavigation();
    const user = chatRoom.users[1];

    const handleClick = () => {
        navigation.navigate("ChatRoom", { id: chatRoom.id });
    }

    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                <Image source = {{ uri: user.imageUri }} style={styles.avatar}/>
                <View style={styles.messageContainer}>
                <Text style={styles.username}> {user.name}</Text>
                <Text numberOfLines={2} style={styles.lastMessage}>  {chatRoom.lastMessage.content}</Text>
                </View>
                <Text style={styles.time} >Wczoraj</Text>
                </View>
            
            </View>
        </TouchableWithoutFeedback>
    )

};

export default ChatListItem;