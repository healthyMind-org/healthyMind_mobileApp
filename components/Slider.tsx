import {ISliderProps} from "./api/ISliderProps";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Slider as ExternSlider} from "@miblanchard/react-native-slider";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export default function Slider(props: ISliderProps) {

    return (
        <>
            <View style={styles.view}>
                <Text style={styles.text}>{props.text}</Text>

                {
                    props.descriptionTitle != null ? (
                        <TouchableOpacity
                            onPress={() => {
                                if (props.descriptionTitle != null) {
                                    Alert.alert(props.descriptionTitle, props.description);
                                }
                            }}

                            style={styles.positionRight}
                        >
                            <FontAwesomeIcon icon={faCircleInfo}/>
                        </TouchableOpacity>
                    ) : ("")
                }
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
        flexDirection: "row"
    },
    positionRight: {
        position: "absolute",
        right: 0,
        top: 4
    },
    text: {
        fontSize: 15
    }
});
