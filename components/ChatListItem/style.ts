import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "98%",
        justifyContent: "space-between",
        padding: 12,
        flex: 1,
        backgroundColor: "#fff"
    },
    mainContainer: {
        flexDirection: "row",
        width:"100%",
        justifyContent: "space-between"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontSize: 16,
        fontWeight: "bold"
    },
    messageContainer: {
     flex:1
        
    },
    lastMessage : {
        fontSize: 16,
        color: "grey",
    },
    time : {
        fontSize: 14,
        color: "#DBDCDB",
    }
});
export default styles;