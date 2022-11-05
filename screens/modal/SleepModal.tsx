import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import {RootStackScreenProps} from "../../types";
import {AirbnbRating} from 'react-native-ratings';
import Calendar from "../../components/Calendar";
import {SleepData} from "../../domain/SleepData";
import {DayLogger} from "../../application/DayLogger";
import {Day} from "../../domain/Day";
import {MentalState} from "../../domain/MentalState";


export default function SleepModal(navProps: RootStackScreenProps<"SleepModal">) {

    let sleepModalProps = navProps.route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [bedTime, setBedTime] = useState(new Date());
    const [sleepRating, setSleepRating] = useState(0);
    const [wakeUpTime, setWakeUpTime] = useState(new Date());
    let mentalState = MentalState.getInstance();
    let day;
    let dayLogger;

    function setAllStates(sleepData: SleepData) {
        setBedTime(sleepData.bedTime as Date);
        setWakeUpTime(sleepData.wakeUpTime as Date);
        setSleepRating(3);
    }

    useEffect(() =>{
        for (let i = 0; i < mentalState.days.length; i++){
            if(mentalState.days[i].date.toISOString() === sleepModalProps.date.toISOString()){
                setAllStates(mentalState.days[i].sleepData as SleepData);
            }
        }
        setIsLoading(false);
    }, []);


    function saveSleepData() {
        //sleepData = new SleepData(bedTime, wakeUpTime, sleepRating);
        day = new Day(sleepModalProps.date);
        dayLogger = new DayLogger(day);
        dayLogger.logSleep(bedTime, wakeUpTime, sleepRating);

        navProps.navigation.goBack();
    }

    function ratingCompleted(rating: number) {
        console.log("Rating is: " + rating)
        setSleepRating(rating);
    }

    return isLoading ? (""):(
        <View style={styles.container}>
            <Text style={styles.title}>Bed Time: </Text>
            <Calendar
                mode={'time'}
                onChange={(newTime: Date) => {
                    setBedTime(newTime);
                }}
                style={[styles.button, styles.calendarButton]}
                value={bedTime}
            />

            <Text style={styles.title}> Wake up: </Text>

            <Calendar
                mode={'time'}
                onChange={(newTime: Date) => {
                    setWakeUpTime(newTime);
                }}
                style={[styles.button, styles.calendarButton]}
                value={wakeUpTime}
            />

            <Text style={styles.title}> Quality: </Text>
            <AirbnbRating
                count={5}
                size={40}
                onFinishRating={ratingCompleted}
                defaultRating={sleepRating}
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
        paddingRight: 20,
    },
});
