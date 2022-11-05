import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Slider} from "@miblanchard/react-native-slider";
import {useState} from "react";

export default function EmotionsModal() {
    const [depressionScore, setDepressionScore] = useState(0);
    const [anxietyScore, setAnxietyScore] = useState(0);
    const [angerScore, setAngerScore] = useState(0);
    const [distressScore, setDistressScore] = useState(0);
    const [overwhelmScore, setOverwhelmScore] = useState(0);
    const [happinessScore, setHappinessScore] = useState(0);
    const [fearScore, setFearScore] = useState(0);
    const [disgustScore, setDisgustScore] = useState(0);
    const [calmnessScore, setCalmnessScore] = useState(0);

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
                        <Text style={styles.text}>Anxious</Text>
                    </View>
                    <Slider
                        value={anxietyScore}
                        onValueChange={value => setAnxietyScore(value as number)}
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
