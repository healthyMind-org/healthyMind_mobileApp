import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Slider} from "@miblanchard/react-native-slider";
import {useEffect, useState} from "react";
import {IEmotionsModalProps} from "./api/IEmotionsModalProps";
import {DayLogger} from "../../application/DayLogger";
import {Day} from "../../domain/Day";
import * as Console from "console";
import {MentalState} from "../../domain/MentalState";
import {EmotionData} from "../../domain/EmotionData";
import {RootStackScreenProps} from "../../types";

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
                console.log("found");
                setAllScores(mentalState.days[i].emotionData as EmotionData);
            }
        }
    },[]);

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


                    <View style={styles.view}>
                        <Text style={styles.text}>Depressed</Text>
                    </View>
                    <Slider
                        value={depressionScore}
                        onValueChange={value => setDepressionScore(value as number)}
                    />
                    <Text>Value: {(depressionScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Angry</Text>
                    </View>
                    <Slider
                        value={anxietyScore}
                        onValueChange={value => setAngerScore(value as number)}
                    />
                    <Text>Value: {(anxietyScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Anxious</Text>
                    </View>
                    <Slider
                        value={angerScore}
                        onValueChange={value => setAngerScore(value as number)}
                    />
                    <Text>Value: {(angerScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Distress</Text>
                    </View>
                    <Slider
                        value={distressScore}
                        onValueChange={value => setDistressScore(value as number)}
                    />
                    <Text>Value: {(distressScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Overwhelmed</Text>
                    </View>
                    <Slider
                        value={overwhelmScore}
                        onValueChange={value => setOverwhelmScore(value as number)}
                    />
                    <Text>Value: {(overwhelmScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Happy</Text>
                    </View>
                    <Slider
                        value={happinessScore}
                        onValueChange={value => setHappinessScore(value as number)}
                    />
                    <Text>Value: {(happinessScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Fearful</Text>
                    </View>
                    <Slider
                        value={fearScore}
                        onValueChange={value => setFearScore(value as number)}
                    />
                    <Text>Value: {(fearScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Disgusted</Text>
                    </View>
                    <Slider
                        value={disgustScore}
                        onValueChange={value => setDisgustScore(value as number)}
                    />
                    <Text>Value: {(disgustScore * 100).toFixed(0)}%</Text>
                    <View style={styles.view}>
                        <Text style={styles.text}>Calm</Text>
                    </View>
                    <Slider
                        value={calmnessScore}
                        onValueChange={value => setCalmnessScore(value as number)}
                    />
                    <Text>Value: {(calmnessScore * 100).toFixed(0)}%</Text>
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
