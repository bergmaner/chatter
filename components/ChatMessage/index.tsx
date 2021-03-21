import React from "react";
import { Text, Image } from "react-native";
import { Message } from "../../types";
import { View } from "react-native";
import 'moment/locale/pl';
import moment from "moment";
import styles from "./style";

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = ( props: ChatMessageProps ) => {

    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === "u1";
    }

    console.log(message)
    return (
        <View style = { styles.container }>
         <View style = {[
             styles.messageContainer, {
             backgroundColor: isMyMessage() ? "#e5e5e5" : "white",
             marginLeft: isMyMessage() ? 50 : 0,
             marginRight: isMyMessage() ? 0 : 50
            }
             ]}>
            {!isMyMessage() && 
          <View style={ styles.autorContainer }>
            <Image source = {{ uri: message.user.imageUri }} style={styles.avatar}/>
            <Text style={ styles.autor }>{ message.user.name }</Text>
          </View>
            }
          <Text style={ styles.message }>{ message.content }</Text>
          <Text style={ styles.createdAt }>{ moment(message.createdAt).fromNow() }</Text>
          
         </View>
        </View>
    )
}

export default ChatMessage;