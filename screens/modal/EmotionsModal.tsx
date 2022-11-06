import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useEffect, useState} from "react";
import {DayLogger} from "../../application/DayLogger";
import {Day} from "../../domain/Day";
import {MentalState} from "../../domain/MentalState";
import {EmotionData} from "../../domain/EmotionData";
import {RootStackScreenProps} from "../../types";
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
                        descriptionTitle={"Depression"}
                        description={"Mental state where you feel down, lack of motivation and avoidance for activities. Some other signs of feeling depressed includes difficulty concentrating, changes into appetite and sleeping patterns (Sartorius et al., 2004). Depression can be treated with therapy, medication and few other self-help methods."}
                    />
                    <Slider
                        text={"Angry"}
                        value={angerScore}
                        onValueChange={(value) => {
                            setAngerScore(value);
                        }}
                        descriptionTitle={"Anger"}
                        description={"Strong and intense state of mind which leads to uncomfortable and non-cooperative response to a perceived threat and/or hurt. Some signs of experiencing anger are increased heart rate, high blood pressure and adrenaline (Videbeck, 2010). Some of the most common coping strategies include therapy sessions where behavioral strategies will be practiced, medication therapies (e.g., antidepressants), and relaxation techniques."}
                    />
                    <Slider
                        text={"Anxious"}
                        value={anxietyScore}
                        onValueChange={(value) => {
                            setAnxietyScore(value);
                        }}
                        descriptionTitle={"Anxiety"}
                        description={"While anxious you might feel uneasy and/ or worried. It is normal to feel anxious before exams or interviews, however, sever levels of anxiety can have significant impact on your mental and physical health. Deep breathing is one of the first things you can do in order to calm down. It is also suggested to exercise, meditate, reading, and therapy (Christensen, 2021)."}
                    />
                    <Slider
                        text={"Distress"}
                        value={distressScore}
                        onValueChange={(value) => {
                            setDistressScore(value);
                        }}
                        descriptionTitle={"Mental distress"}
                        description={"Mental state where the emotions inhibit your ability to deal with typical everyday situations. Mental distress can be a sign of depression and anxiety issues. Some symptoms of mental distress encompass panic attacks, self-harm, and suicidal thoughts. Different types of therapies, such as cognitive behavioral therapy (CBT) and creative therapy have been shown to aid the negative effects (Whitton, 2022)."}
                    />
                    <Slider
                        text={"Overwhelmed"}
                        value={overwhelmScore}
                        onValueChange={(value) => {
                            setOverwhelmScore(value);
                        }}
                        descriptionTitle={"Overwhelm"}
                        description={"Mental state of mind where you become overcome by intense feeling of something being too challenging or impossible. Feeling overwhelmed inhibits your ability to think and act rationally leading to feeling frozen or paralyzed. To stop feeling overwhelmed try taking deep breaths, be in the moment and centre yourself or try to reverse the overwhelming thoughts (Daino, 2019)."}
                    />
                    <Slider
                        text={"Happy"}
                        value={happinessScore}
                        onValueChange={(value) => {
                            setHappinessScore(value);
                        }}
                        descriptionTitle={"Happiness"}
                        description={"Positive and pleasant emotions that are closely linked with life satisfaction, well-being and flourishing (Anand, 2016)."}
                    />
                    <Slider
                        text={"Fearful"}
                        value={fearScore}
                        onValueChange={(value) => {
                            setFearScore(value);
                        }}
                        descriptionTitle={"Fear"}
                        description={"Intense feeling of unpleasant emotion responding to a perceived danger and/or threat. When faced with fearful situations you might experience fight or flight phenomenon or freezing and paralysis in more extreme cases. Fear management includes pharmaceutical options, psychological theories, such as cognitive behavioural therapy or literary solutions e.g., expressing fears by writing a journal (Kaplan et al., 2011 & Olsen 2015)."}
                    />
                    <Slider
                        text={"Disgusted"}
                        value={disgustScore}
                        onValueChange={(value) => {
                            setDisgustScore(value);
                        }}
                        descriptionTitle={"Disgust"}
                        description={"Strong emotional response of something distasteful, offensive or unpleasant. In some cases, feeling psychological disgust has been linked to major depressive disorder. Self-disgust can also lead to more severe depression and dysfunctional thoughts (Simpson et al., 2010)."}
                    />
                    <Slider
                        text={"Calm"}
                        value={calmnessScore}
                        onValueChange={(value) => {
                            setCalmnessScore(value);
                        }}
                        descriptionTitle={"Calmness"}
                        description={"Mental state where you feel at peace and calm. You do not feel any disturbances, excitement nor irritations. One can experience calmness while relaxing or during high alert stages. Some actions you can do to reach calmness includes – yoga, martial arts, gardening, meditation or relaxation sessions via psychotherapy (Thompson,2018)."}
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
