import {RootStackScreenProps} from "../../types";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}> Emotions </Text>
                    <View style={styles.innerContainer}>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //depression
                                icon={faCloudShowersHeavy}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Depression</Text>
                            <Text style={styles.text}>{emotionalData.depressionLevel} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //angry
                                icon={faFaceAngry}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Anger</Text>
                            <Text style={styles.text}>{emotionalData.angerLevel} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //anxious
                                icon={faFaceTired}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Anxiety</Text>
                            <Text style={styles.text}>{emotionalData.anxietyLevel} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //happy
                                icon={faFaceLaughBeam}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Happiness</Text>
                            <Text style={styles.text}>{emotionalData.happinessLevel} %</Text>
                        </View>
                    </View>

                    <View style={styles.innerContainer}>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //fearful
                                icon={faFaceSurprise}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Fear</Text>
                            <Text style={styles.text}>{emotionalData.fearLevel} %</Text>
                        </View>

                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //disgusted
                                icon={faFaceRollingEyes}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Disgust</Text>
                            <Text style={styles.text}>{emotionalData.disgustLevel} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //overwhelmed
                                icon={faFaceSmileBeam}
                                size={45}
                                style={styles.icons}
                            />

                            <Text style={styles.text}>Overwhelm</Text>
                            <Text style={styles.text}>{emotionalData.overwhelmLevel} %</Text>
                        </View>

                    </View>
                    <View style={styles.innerContainer}>

                        {/*<View style={styles.innerInnerContainer}>*/}
                        {/*    <FontAwesomeIcon*/}
                        {/*        //distressed*/}
                        {/*        icon={faFaceMehBlank}*/}
                        {/*        size={45}*/}
                        {/*        style={styles.icons}*/}
                        {/*    />*/}

                        {/*    <Text style={styles.text}>distress: {emotionalData.distressLevel} %</Text>*/}
                        {/*</View>*/}

                    </View>

                    <Text style={styles.title}> Exposure </Text>
                    <View style={styles.innerContainer}>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //Pollution
                                icon={faSmog}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Pollution:</Text>
                            <Text style={styles.text}>{exposureData.pollutionLevel} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //disasters
                                icon={faTornado}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Disasters:</Text>
                            <Text style={styles.text}>{exposureData.disasterLevel} %</Text>
                        </View>
                    </View>
                    <Text style={styles.title}> Sleep </Text>
                    <View style={styles.innerContainer}>
                        <View style={styles.innerInnerContainer}>
                        <FontAwesomeIcon
                            //sleep
                            icon={faBed}
                            size={45}
                            style={styles.icons}
                        />
                        <Text style={styles.text}>Sleep:</Text>
                        <Text style={styles.text}>{sleepData.quality * 20} %</Text>
                        </View>
                    </View>



                </View>

            </ScrollView>
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
        alignItems: 'stretch',
    },
    innerInnerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 15,
        alignSelf: 'center',

    },
    innerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        // marginLeft: 10,
        // marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icons: {
        borderStyle: "solid",
        borderColor: 'lightgreen',
        marginHorizontal: 10,
    },
    text: {
        fontSize: 12,

    },
    saveButton: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '90%',
        paddingVertical: 20,
        marginTop: 200,
        backgroundColor: "rgba(178,199,235,0.37)",
        position: "absolute",
        top: 380,
        marginLeft: 20,
    },
});
