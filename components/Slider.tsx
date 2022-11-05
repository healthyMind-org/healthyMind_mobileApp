import {ISliderProps} from "./api/ISliderProps";
import {StyleSheet, Text, View} from "react-native";
import {Slider as ExternSlider} from "@miblanchard/react-native-slider";

export default function Slider(props: ISliderProps) {

    return (
        <>
            <View style={styles.view}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <ExternSlider
                value={props.value}
                minimumValue={0}
                maximumValue={100}
                step={props.step != null ? props.step : 1}
                onValueChange={(value) => {
                    props.onValueChange(value as number);
                }}
            />
            <Text>Value: {props.value}%</Text>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        alignItems: "flex-start",
    },
    text: {
        fontSize: 15
    }
});
