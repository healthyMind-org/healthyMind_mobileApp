import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {RootStackScreenProps} from "../../types";
import { Rating} from 'react-native-ratings';



export default function SleepModal(navProps: RootStackScreenProps<"SleepModal">) {

    const [newSleepTime, setNewSleepTime] = useState("");
    const [time, setTime] = useState(new Date());
    const [sleepRating, setSleepRating] = useState('')

    // const onChange = (event: any, selectedDate: Date) => {
    //     const currentDate = selectedDate;
    //     setShow(false);
    //     setDate(currentDate);
    // };
    //
    //
    // const showMode = (currentMode:any) => {
    //         setShow(false);
    //     setMode(currentMode);
    // };

    // const showDatepicker = () => {
    //     showMode('date');
    // };
    //
    // const showTimepicker = () => {
    //     showMode('time');
    // };

    function saveSleepData(){
        console.log("save")
        navProps.navigation.navigate('Root');
    }

    function ratingCompleted(rating: string) {
        console.log("Rating is: " + rating)
        setSleepRating(rating);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Bed Time: </Text>
                {/*see the example from github webpage and after use the compontent, marco is doing */}
                {/*<DateTimePicker*/}
                {/*    mode="time"*/}
                {/*    value={time}*/}
                {/*    style={{width: 300, opacity: 1, height: 30, marginTop: 50}}*/}
                {/*    onChange={onTimeChange}*/}
                {/*/>*/}
                {/*<Button onPress={showTimepicker} title="Show time picker!" />*/}
                <Button title={'placeholder'}/>
                <Text>selected: {Date.toLocaleString()}</Text>
                {/*{show && (*/}
                {/*    <DateTimePicker*/}
                {/*        testID="dateTimePicker"*/}
                {/*        value={date}*/}
                {/*        mode={mode}*/}
                {/*        is24Hour={true}*/}
                {/*        onChange={onChange}*/}
                {/*    />*/}
                {/*)}*/}
            </View>
            <View >
                <Text style={styles.title}> Wake up: </Text>
                <TextInput></TextInput>
            </View>
            <View>
                <Text style={styles.title}> Quality: </Text>
                <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={40}
                    onFinishRating={ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />

            </View>
            <View>
                <Button onPress={saveSleepData} title="Save"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
});
