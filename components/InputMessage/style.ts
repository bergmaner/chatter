import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "flex-end"
    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "flex-end",
        padding: 2,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: "red",
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput : {
        flex: 1,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    icon: {
        padding: 10,
    }

});

export default styles;