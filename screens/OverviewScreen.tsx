import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootTabScreenProps} from '../types';
import Calendar from "../components/Calendar";
import {useState} from "react";
import {IEmotionsModalProps} from "./modal/api/IEmotionsModalProps";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faBed,
    faComments,
    faFaceSmile,
    faMeteor,
    faPersonCircleCheck,
    faPersonRunning,
    faUtensils
} from "@fortawesome/free-solid-svg-icons";
import {IStatusModalProps} from "./modal/api/IStatusModalProps";

export default function OverviewScreen(navProps: RootTabScreenProps<'OverviewScreen'>) {
    let emotionsModalProps: IEmotionsModalProps = {date: new Date()};
    let sleepModalProps: IEmotionsModalProps = {date: new Date()};
    let statusModalPros: IStatusModalProps = {date: new Date()};
    let iconSize = 35;

    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.container}>
            <Calendar
                mode={'date'}
                value={date}
                onChange={(newDate: Date) => {
                    newDate.setHours(0, 0, 0, 0);
                    setDate(newDate);
                }}
                style={[styles.button, styles.calendarButton]}
            />

            <View style={styles.innerContainer}>
                <View style={styles.item}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            date.setHours(0,0,0,0);
                            sleepModalProps.date = date;
                            navProps.navigation.navigate("SleepModal", sleepModalProps);
                        }}
                    >
                        <FontAwesomeIcon style={styles.icon}  icon={faBed} size={iconSize}/>
                        <Text>Sleep</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <FontAwesomeIcon style={styles.icon}  icon={faUtensils} size={iconSize}/>
                        <Text>Diet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <FontAwesomeIcon style={styles.icon}  icon={faPersonRunning} size={iconSize}/>
                        <Text>Activities</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            emotionsModalProps.date = date;
                            navProps.navigation.navigate("EmotionsModal", emotionsModalProps);
                        }}
                    >
                        <FontAwesomeIcon style={styles.icon}  icon={faFaceSmile} size={iconSize}/>
                        <Text>Emotions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navProps.navigation.navigate("ExposureModal", {date: date});
                        }}
                    >
                        <FontAwesomeIcon style={styles.icon}  icon={faMeteor} size={iconSize}/>
                        <Text>Exposure</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <FontAwesomeIcon style={styles.icon}  icon={faComments} size={iconSize}/>
                        <Text>Interactions</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.button, styles.statusButton]}
                    onPress={() => {
                        statusModalPros.date = date;
                        navProps.navigation.navigate("StatusModal", statusModalPros);
                    }}
                >
                    <FontAwesomeIcon style={styles.icon} icon={faPersonCircleCheck} size={40}/>
                    <Text>Status</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
      marginBottom: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'baseline',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        alignItems: 'center',
        width: '50%',
        paddingTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
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
    statusButton: {
        width: '88%',
        marginHorizontal: 25,
    },
    calendarButton: {
        width: '100%',
        marginTop: 2,
        color: 'white',
        borderRadius: 0,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
    }
});
