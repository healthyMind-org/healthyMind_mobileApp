import {RootStackScreenProps} from "../../types";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faFaceAngry,
    faFaceLaughBeam, faFaceMehBlank,
    faFaceRollingEyes, faFaceSmileBeam,
    faFaceSurprise,
    faFaceTired
} from "@fortawesome/free-regular-svg-icons";
import {faCloudShowersHeavy} from "@fortawesome/free-solid-svg-icons";
import {MentalState} from "../../domain/MentalState";
import {useEffect, useState} from "react";
import {SleepData} from "../../domain/SleepData";
import {EmotionData} from "../../domain/EmotionData";
import {ExposureData} from "../../domain/ExposureData";
import {faSmog} from "@fortawesome/free-solid-svg-icons/faSmog";
import {faTornado} from "@fortawesome/free-solid-svg-icons/faTornado";
import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";


export default function StatusModal(navProps: RootStackScreenProps<"StatusModal">) {
    let statusModalProps = navProps.route.params;
    let mentalState = MentalState.getInstance();

    const [emotionalData, setEmotionalData] = useState(new EmotionData(0, 0, 0, 0, 0, 0, 0, 0, 0));
    const [sleepData, setSleepData] = useState(new SleepData(new Date(), new Date(), 0));
    const [exposureData, setExposureData] = useState(new ExposureData(0, 0))

    useEffect(() => {
        for (let i = 0; i < mentalState.days.length; i++) {
            let day = mentalState.days[i];

            if (day.date.toISOString() === statusModalProps.date.toISOString()) {
                if (day.emotionData != null) {
                    setEmotionalData(day.emotionData as EmotionData);
                }
                if (day.sleepData != null) {
                    setSleepData(day.sleepData as SleepData);
                }
                if (day.exposureData != null) {
                    setExposureData(day.exposureData as ExposureData)
                }
            }
        }
    }, []);

    function shareResults() {
        console.log("Share it with your therapist, to do ")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Emotions </Text>
            <View style={styles.innerContainer}>
                <FontAwesomeIcon
                    //depression
                    icon={faCloudShowersHeavy}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    //angry
                    icon={faFaceAngry}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    //anxious
                    icon={faFaceTired}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    //happy
                    icon={faFaceLaughBeam}
                    size={45}
                    style={styles.icons}
                />
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>depression: {emotionalData.depressionLevel} %</Text>
                <Text style={styles.text}>anger: {emotionalData.angerLevel} %</Text>
                <Text style={styles.text}>anxiety: {emotionalData.anxietyLevel} %</Text>
                <Text style={styles.text}>happiness: {emotionalData.happinessLevel} %</Text>
            </View>
            <View style={styles.innerContainer}>
                <FontAwesomeIcon
                    //fearfull
                    icon={faFaceSurprise}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    //disgusted
                    icon={faFaceRollingEyes}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    //overwellmed
                    icon={faFaceSmileBeam}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    //distressed
                    icon={faFaceMehBlank}
                    size={45}
                    style={styles.icons}
                />
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>fear: {emotionalData.fearLevel} %</Text>
                <Text style={styles.text}>disgust: {emotionalData.disgustLevel} %</Text>
                <Text style={styles.text}>overwhelm: {emotionalData.overwhelmLevel} %</Text>
                <Text style={styles.text}>distress: {emotionalData.distressLevel} %</Text>
            </View>

            <Text style={styles.title}> Exposure </Text>
            <View style={styles.innerContainer}>
                <FontAwesomeIcon
                    //Pollution
                    icon={faSmog}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    //disasters
                    icon={faTornado}
                    size={45}
                    style={styles.icons}
                />
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>pollution: {exposureData.pollutionLevel} %</Text>
                <Text style={styles.text}>disaster: {exposureData.disasterLevel} %</Text>
            </View>
            <Text style={styles.title}> Sleep </Text>
            <View style={styles.innerContainer}>
                <FontAwesomeIcon
                    //sleep
                    icon={faBed}
                    size={45}
                    style={styles.icons}
                />
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Quality: {sleepData.quality} %</Text>
            </View>

            <TouchableOpacity
                style={styles.saveButton}
                onPress={shareResults}
            >
                <Text>Share the results with your therapist</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'baseline',
    },
    innerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icons: {
        marginRight: 30,
        borderStyle: "solid",
        borderColor: 'lightgreen',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        marginRight: 8,
        alignItems: 'center',
    },
    saveButton: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '90%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "rgba(178,199,235,0.37)",
        position: "absolute",
        bottom: 25,
        marginLeft: 20,
    },
});
