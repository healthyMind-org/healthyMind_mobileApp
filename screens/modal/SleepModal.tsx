import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {RootStackScreenProps} from "../../types";
import {AirbnbRating} from 'react-native-ratings';
import Calendar from "../../components/Calendar";
import {SleepData} from "../../domain/SleepData";
import {DayLogger} from "../../application/DayLogger";
import {Day} from "../../domain/Day";


export default function SleepModal(navProps: RootStackScreenProps<"SleepModal">) {

    const [sleepTime, setSleepTime] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [sleepRating, setSleepRating] = useState(0);
    const [wakeUpTime, setWakeUpTime] = useState(new Date());
    
    let day;
    let dayLogger;
    let sleepData;


    function saveSleepData() {
        sleepData = new SleepData(sleepTime, wakeUpTime, sleepRating);
        day = new Day(time);
        dayLogger = new DayLogger(day);
        dayLogger.logSleep(sleepTime, wakeUpTime, sleepRating);

        navProps.navigation.navigate('Root');
    }

    function ratingCompleted(rating: number) {
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
            <AirbnbRating
                count={5}
                size={40}
                onFinishRating={ratingCompleted}
                defaultRating={0}
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
        borderRadius: 15,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '75%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "rgba(178,199,235,0.37)",
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
        backgroundColor: "rgba(178,199,235,0.37)",
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
