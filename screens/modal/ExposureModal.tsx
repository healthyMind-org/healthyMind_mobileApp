import {RootStackScreenProps} from "../../types";
import {IExposureModalProps} from "./api/IExposureModalProps";
import {StyleSheet, View} from "react-native";

export default function ExposureModal(navProps: RootStackScreenProps<"ExposureModal">) {

    let props: IExposureModalProps = navProps.route.params;

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    calendarButton: {
        width: '100%',
        backgroundColor: '#dddddd',
    },
    button: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '75%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#DDDDDD",
    },
});
