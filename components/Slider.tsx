import {ISliderProps} from "./api/ISliderProps";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Slider as ExternSlider} from "@miblanchard/react-native-slider";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export default function Slider(props: ISliderProps) {

    return (
        <>
            <View style={styles.view}>
                <Text style={styles.text}>{props.text}: {props.value}%</Text>

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
                            <FontAwesomeIcon icon={faCircleInfo} size={20}/>
                        </TouchableOpacity>
                    ) : ("")
                }
            </View>

            <View style={styles.slider}>
                <ExternSlider
                    trackClickable={false}
                    value={props.value}
                    minimumValue={0}
                    maximumValue={100}
                    step={props.step != null ? props.step : 1}
                    onValueChange={(value) => {
                        props.onValueChange(value as number);
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    slider: {
        marginBottom: 15,
    },
    view: {
        marginTop: 20,
        alignItems: "flex-start",
        flexDirection: "row"
    },
    positionRight: {
        position: "absolute",
        right: 0,
        top: 3
    },
    text: {
        fontSize: 15
    }
});
