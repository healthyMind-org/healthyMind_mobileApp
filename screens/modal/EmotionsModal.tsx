import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {useEffect, useState} from "react";
import {IEmotionsModalProps} from "./api/IEmotionsModalProps";
import {DayLogger} from "../../application/DayLogger";
import {Day} from "../../domain/Day";
import * as Console from "console";
import {MentalState} from "../../domain/MentalState";
import {EmotionData} from "../../domain/EmotionData";
import {RootStackScreenProps} from "../../types";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import Slider from "../../components/Slider";

export default function EmotionsModal(navProps: RootStackScreenProps<"EmotionsModal">) {
    let emotionsModalProps = navProps.route.params;

    const [depressionScore, setDepressionScore] = useState(0);
    const [anxietyScore, setAnxietyScore] = useState(0);
    const [angerScore, setAngerScore] = useState(0);
    const [distressScore, setDistressScore] = useState(0);
    const [overwhelmScore, setOverwhelmScore] = useState(0);
    const [happinessScore, setHappinessScore] = useState(0);
    const [fearScore, setFearScore] = useState(0);
    const [disgustScore, setDisgustScore] = useState(0);
    const [calmnessScore, setCalmnessScore] = useState(0);


    useEffect(() => {
        let mentalState = MentalState.getInstance();
        for (let i = 0; i < mentalState.days.length; i++) {
            if (mentalState.days[i].date.toISOString() === emotionsModalProps.date.toISOString()) {
                if (mentalState.days[i].emotionData != null) {
                    setAllScores(mentalState.days[i].emotionData as EmotionData);
                }
            }
        }
    }, []);

    function setAllScores(emotionData: EmotionData) {
        setDepressionScore(emotionData.depressionLevel);
        setAnxietyScore(emotionData.anxietyLevel);
        setAngerScore(emotionData.angerLevel);
        setDistressScore(emotionData.distressLevel);
        setOverwhelmScore(emotionData.overwhelmLevel);
        setHappinessScore(emotionData.happinessLevel);
        setFearScore(emotionData.fearLevel);
        setDisgustScore(emotionData.disgustLevel);
        setCalmnessScore(emotionData.calmnessLevel);
    }

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.title}>How did you feel today?</Text>

            <ScrollView style={{height: "80%"}}>
                <View style={styles.container}>
                    <Slider
                        text={"Depressed"}
                        value={depressionScore}
                        onValueChange={(value) => {
                            setDepressionScore(value);
                        }}
                    />
                    <Slider
                        text={"Angry"}
                        value={angerScore}
                        onValueChange={(value) => {
                            setAngerScore(value);
                        }}
                    />
                    <Slider
                        text={"Anxious"}
                        value={anxietyScore}
                        onValueChange={(value) => {
                            setAnxietyScore(value);
                        }}
                    />
                    <Slider
                        text={"Distress"}
                        value={distressScore}
                        onValueChange={(value) => {
                            setDistressScore(value);
                        }}
                    />
                    <Slider
                        text={"Overwhelmed"}
                        value={overwhelmScore}
                        onValueChange={(value) => {
                            setOverwhelmScore(value);
                        }}
                    />
                    <Slider
                        text={"Happy"}
                        value={happinessScore}
                        onValueChange={(value) => {
                            setHappinessScore(value);
                        }}
                    />
                    <Slider
                        text={"Fearful"}
                        value={fearScore}
                        onValueChange={(value) => {
                            setFearScore(value);
                        }}
                    />
                    <Slider
                        text={"Disgusted"}
                        value={disgustScore}
                        onValueChange={(value) => {
                            setDisgustScore(value);
                        }}
                    />
                    <Slider
                        text={"Calm"}
                        value={calmnessScore}
                        onValueChange={(value) => {
                            setCalmnessScore(value);
                        }}
                    />
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    let day = new Day(emotionsModalProps.date);
                    let dayLogger = new DayLogger(day);
                    dayLogger.logEmotions(angerScore, distressScore, overwhelmScore, happinessScore, fearScore, disgustScore, calmnessScore, anxietyScore, depressionScore);
                    navProps.navigation.goBack();
                }}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        padding: 20,
    },
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
        backgroundColor: "rgba(178,199,235,0.37)",
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
