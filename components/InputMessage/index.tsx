import { FontAwesome5, MaterialCommunityIcons, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native"; 
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

const InputMessage = () => {

    const [ message, setMessage ] = useState("");

    const onSendPress = () => {
        console.warn(`Send ${message}`);
        console.log(message)
        setMessage("");
    }

    const onMicrophonePress = () => {
        console.warn("microphone");
        console.log("mic")
    }

    const handlePress = () =>  {

        if(!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }

    }

    return (
        <View style = { styles.container }>
          <View style = { styles.mainContainer }>
              <FontAwesome5 name = "laugh-beam" size = {24} color = "grey" style = { styles.icon } />
              <TextInput 
              style = { styles.textInput }
              multiline
              value = {message}
              placeholder = {"Wpisz wiadomość"}
              onChangeText = {setMessage}
               />
              { !message && <Fontisto name="camera" size = {24} color = "grey" style = { styles.icon }/> } 
              <Entypo name = "attachment" size = {24} color = "grey" style = { styles.icon } />
          </View>
          <TouchableOpacity onPress = { handlePress }>
            <View style= { styles.buttonContainer }>
                    { !message
                    ? <MaterialCommunityIcons name = "microphone" size = {24} color = "white" />
                    : <MaterialIcons name = "send" size = {24} color = "white" />
                    }
            </View>
           </TouchableOpacity>
        </View>
    )
}

export default InputMessage;