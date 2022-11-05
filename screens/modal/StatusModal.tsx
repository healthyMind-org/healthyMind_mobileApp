import {RootStackScreenProps} from "../../types";
import {StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faFaceAngry, faFaceLaughBeam, faFaceSurprise, faFaceTired} from "@fortawesome/free-regular-svg-icons";
import {faCloudShowersHeavy} from "@fortawesome/free-solid-svg-icons";
import {MentalState} from "../../domain/MentalState";
import {useEffect} from "react";
import {SleepData} from "../../domain/SleepData";


export default function StatusModal(navProps: RootStackScreenProps<"StatusModal">) {
    let statusModalProps = navProps.route.params;
    let mentalState = MentalState.getInstance();
    let statusData;

    useEffect(() =>{
        console.log(mentalState);
        for (let i = 0; i < mentalState.days.length; i++){
            if(mentalState.days[i].date.toISOString() === statusModalProps.date.toISOString()){
                //setAllStates(mentalState.days[i].sleepData as SleepData);
                console.log(mentalState.days[i]);
                statusData = mentalState.days[i];
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Emotions </Text>
            <View style={styles.innerContainer}>
                <FontAwesomeIcon
                    icon={faCloudShowersHeavy}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    icon={faFaceTired}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    icon={faFaceAngry}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    icon={faFaceLaughBeam}
                    size={45}
                    style={styles.icons}
                />
                <FontAwesomeIcon
                    icon={faFaceSurprise}
                    size={45}
                    style={styles.icons}
                />
            </View>
            <Text>{statusData.emotionData.angerLevel}</Text>
            <View style={styles.innerContainer}>
                <Text style={styles.title}> Exposure </Text>
            </View>

            <View style={styles.innerContainer}>
                <Text style={styles.title}> Sleep </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
    statusButton: {
        width: '88%',
        marginHorizontal: 25,
    },
    calendarButton: {
        width: '100%',
        backgroundColor: '#dddddd',
    },
    icons: {
        marginLeft: 20,
        borderRadius: 100,
        //backgroundColor: 'lightgreen',
        borderStyle: "solid",
        borderColor: 'lightgreen',
    }
});
