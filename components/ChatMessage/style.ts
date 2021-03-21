import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        padding: 10
    },
    messageContainer: {
        backgroundColor: "#e5e5e5",
        marginRight: 50,
        borderRadius: 10,
        padding: 10
    },
    message: {
  
    },
    createdAt: {
        alignSelf: "flex-end",
        color: "grey",
        fontSize: 10
    },
    autor: {
        color: "black",
        fontWeight: "bold",
        marginBottom: 5,
        paddingLeft: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    autorContainer : { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        paddingVertical: 5 
    }


});

export default styles;