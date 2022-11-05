import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import {useState} from "react";
import {ICalendarProps} from "./api/ICalendarProps";

export default function Calendar(props: ICalendarProps) {
    const [date, setDate] = useState(props.value);

    const onChange = (event: any, selectedDate: any) => {
        setDate(selectedDate);
        props.onChange(selectedDate);
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange: onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode(props.mode);
    };

    return (
        <>
            <TouchableOpacity
                style={props.style != null ? props.style : styles.button}
                onPress={showDatepicker}
            >
                <Text>{date.toLocaleString()}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#dddddd",
    },
});