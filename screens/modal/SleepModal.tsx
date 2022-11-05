import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {RootStackScreenProps} from "../../types";
import {Rating} from 'react-native-ratings';
import Calendar from "../../components/Calendar";


export default function SleepModal(navProps: RootStackScreenProps<"SleepModal">) {

    const [sleepTime, setSleepTime] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [sleepRating, setSleepRating] = useState('')
    const [wakeUpTime, setWakeUpTime] = useState(new Date())

    function saveSleepData() {
        console.log("save")
        navProps.navigation.navigate('Root');
    }

    function ratingCompleted(rating: string) {
        console.log("Rating is: " + rating)
        setSleepRating(rating);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Bed Time: </Text>
            <Calendar
                mode={'time'}
                onChange={(newTime: Date) => {
                    setSleepTime(newTime);
                }}
                style={[styles.button, styles.calendarButton]}
                value={time}
            />

            <Text style={styles.title}> Wake up: </Text>
            <Calendar
                mode={'time'}
                onChange={(newTime: Date) => {
                    setWakeUpTime(newTime);
                }}
                style={[styles.button, styles.calendarButton]}
                value={time}
            />

            <Text style={styles.title}> Quality: </Text>
            <Rating
                type='star'
                ratingCount={5}
                imageSize={40}
                onFinishRating={ratingCompleted}
                style={styles.rating}
            />

            <TouchableOpacity
                style={styles.saveButton}
                onPress={saveSleepData}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 10,
    },
    title: {
        paddingTop: 20,
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
    saveButton: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '95%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#DDDDDD",
        position: "absolute",
        bottom:25,
        marginLeft:20,
    },
    rating: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: 20,
    },
});
