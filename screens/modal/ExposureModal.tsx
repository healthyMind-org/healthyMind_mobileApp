import {RootStackScreenProps} from "../../types";
import {IExposureModalProps} from "./api/IExposureModalProps";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {Slider} from "@miblanchard/react-native-slider";

export default function ExposureModal(navProps: RootStackScreenProps<"ExposureModal">) {

    let props: IExposureModalProps = navProps.route.params;

    const [pollutionScore, setPollutionScore] = useState(0);
    const [disasterScore, setDisasterScore] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>U good bro?</Text>

            <ScrollView style={{height: "80%"}}>
                <View style={styles.container}>
                    <View style={styles.view}>
                        <Text style={styles.text}>Pollution</Text>
                    </View>
                    <Slider
                        value={pollutionScore}
                        onValueChange={value => setPollutionScore(value as number)}
                    />
                    <Text>Value: {(pollutionScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Disaster</Text>
                    </View>
                    <Slider
                        value={disasterScore}
                        onValueChange={value => setDisasterScore(value as number)}
                    />
                    <Text>Value: {(disasterScore * 100).toFixed(0)}%</Text>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {

                }}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#DDDDDD",
    },
    view: {
        marginTop: 20,
        alignItems: "flex-start",
    },
    text: {
        fontSize: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
