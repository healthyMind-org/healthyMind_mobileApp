import {RootStackScreenProps} from "../../types";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faFaceAngry,
    faFaceLaughBeam,
    faFaceRollingEyes,
    faFaceSmileBeam,
    faFaceSurprise,
    faFaceTired
} from "@fortawesome/free-regular-svg-icons";
import {faCloudShowersHeavy} from "@fortawesome/free-solid-svg-icons";
import {MentalState} from "../../domain/MentalState";
import {SleepData} from "../../domain/SleepData";
import {EmotionData} from "../../domain/EmotionData";
import {ExposureData} from "../../domain/ExposureData";
import {faSmog} from "@fortawesome/free-solid-svg-icons/faSmog";
import {faTornado} from "@fortawesome/free-solid-svg-icons/faTornado";
import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";


export default function StatusModal(navProps: RootStackScreenProps<"StatusModal">) {

    let mentalState = MentalState.getInstance();

    let averageEmotion: EmotionData = new EmotionData(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let averageExposure: ExposureData = new ExposureData(0, 0);
    let averageSleep: SleepData = new SleepData(new Date(), new Date(), 0);

    let emotionDataCount = 0;
    let exposureDataCount = 0;
    let sleepDataCount = 0;

    for (let i = 0; i < mentalState.days.length; i++) {
        let day = mentalState.days[i];

        if (day.emotionData != null) {
            averageEmotion.anxietyLevel += +day.emotionData.anxietyLevel;
            averageEmotion.angerLevel += +day.emotionData.angerLevel;
            averageEmotion.happinessLevel += +day.emotionData.happinessLevel;
            averageEmotion.fearLevel += +day.emotionData.fearLevel;
            averageEmotion.distressLevel += +day.emotionData.distressLevel;
            averageEmotion.disgustLevel += +day.emotionData.disgustLevel;
            averageEmotion.calmnessLevel += +day.emotionData.calmnessLevel;
            averageEmotion.overwhelmLevel += +day.emotionData.overwhelmLevel;
            averageEmotion.depressionLevel += +day.emotionData.depressionLevel;
            emotionDataCount++;
        }
        if (day.exposureData != null) {
            averageExposure.disasterLevel += +day.exposureData.disasterLevel;
            averageExposure.pollutionLevel += +day.exposureData.pollutionLevel;
            exposureDataCount++;
        }
        if (day.sleepData != null) {
            averageSleep.quality += +day.sleepData.quality;
            sleepDataCount++;
        }

        if (emotionDataCount > 0) {
            averageEmotion.anxietyLevel /= emotionDataCount;
            averageEmotion.angerLevel /= emotionDataCount;
            averageEmotion.happinessLevel /= emotionDataCount;
            averageEmotion.fearLevel /= emotionDataCount;
            averageEmotion.distressLevel /= emotionDataCount;
            averageEmotion.disgustLevel /= emotionDataCount;
            averageEmotion.calmnessLevel /= emotionDataCount;
            averageEmotion.overwhelmLevel /= emotionDataCount;
            averageEmotion.depressionLevel /= emotionDataCount;
        }
        if (exposureDataCount > 0) {
            averageExposure.disasterLevel /= exposureDataCount;
            averageExposure.pollutionLevel /= exposureDataCount;
        }
        if (sleepDataCount > 0) {
            averageSleep.quality /= sleepDataCount;
        }
    }

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
                            <Text style={styles.text}>{averageEmotion.depressionLevel.toFixed(2)} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //angry
                                icon={faFaceAngry}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Anger</Text>
                            <Text style={styles.text}>{averageEmotion.angerLevel.toFixed(2)} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //anxious
                                icon={faFaceTired}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Anxiety</Text>
                            <Text style={styles.text}>{averageEmotion.anxietyLevel.toFixed(2)} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //happy
                                icon={faFaceLaughBeam}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Happiness</Text>
                            <Text style={styles.text}>{averageEmotion.happinessLevel.toFixed(2)} %</Text>
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
                            <Text style={styles.text}>{averageEmotion.fearLevel.toFixed(2)} %</Text>
                        </View>

                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //disgusted
                                icon={faFaceRollingEyes}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Disgust</Text>
                            <Text style={styles.text}>{averageEmotion.disgustLevel.toFixed(2)} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //overwhelmed
                                icon={faFaceSmileBeam}
                                size={45}
                                style={styles.icons}
                            />

                            <Text style={styles.text}>Overwhelm</Text>
                            <Text style={styles.text}>{averageEmotion.overwhelmLevel.toFixed(2)} %</Text>
                        </View>
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
                            <Text style={styles.text}>{averageExposure.pollutionLevel.toFixed(2)} %</Text>
                        </View>
                        <View style={styles.innerInnerContainer}>
                            <FontAwesomeIcon
                                //disasters
                                icon={faTornado}
                                size={45}
                                style={styles.icons}
                            />
                            <Text style={styles.text}>Disasters:</Text>
                            <Text style={styles.text}>{averageExposure.disasterLevel.toFixed(2)} %</Text>
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
                            <Text style={styles.text}>{(averageSleep.quality * 20).toFixed(2)} %</Text>
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
    },
    title: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 18,
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
        top: 400,
        marginLeft: 20,
    },
});
