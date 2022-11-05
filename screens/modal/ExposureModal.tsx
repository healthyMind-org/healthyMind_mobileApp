import {RootStackScreenProps} from "../../types";
import {IExposureModalProps} from "./api/IExposureModalProps";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {Slider} from "@miblanchard/react-native-slider";
import {trackMarkStyles} from "@miblanchard/react-native-slider/lib/stories/styles";

enum POLLUTION_LVL_COLOR {
    GOOD = "#7efc7e",
    MODERATE = "#fafa7d",
    UNHEALTHY_FOR_SENSITIVE_GROUP = "#faba7e",
    UNHEALTHY = "#fc7d7d",
    VERY_UNHEALTHY = "#f07efc",
    HAZARDOUS = "#f6789d"
}

enum POLLUTION_LVL {
    GOOD = "Good",
    MODERATE = "Moderate",
    UNHEALTHY_FOR_SENSITIVE_GROUP = "Unhealthy for sensitive group",
    UNHEALTHY = "Unhealthy",
    VERY_UNHEALTHY = "Very unhealthy",
    HAZARDOUS = "Hazardous"
}

enum DISASTER_LVL {
    NONE = "None",
    VERY_LOW = "Very low",
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High",
    VERY_HIGH = "Very high"
}

const getPollutionStateText = (value: number) => {
    if (value <= 10) {
        return POLLUTION_LVL.GOOD;
    } else if (value <= 20) {
        return POLLUTION_LVL.MODERATE;
    } else if (value <= 30) {
        return POLLUTION_LVL.UNHEALTHY_FOR_SENSITIVE_GROUP;
    } else if (value <= 40) {
        return POLLUTION_LVL.UNHEALTHY;
    } else if (value <= 60) {
        return POLLUTION_LVL.VERY_UNHEALTHY;
    } else {
        return POLLUTION_LVL.HAZARDOUS;
    }
}

const getPollutionColor = (state: POLLUTION_LVL) => {
    switch (state) {
        case POLLUTION_LVL.GOOD:
            return POLLUTION_LVL_COLOR.GOOD;
        case POLLUTION_LVL.MODERATE:
            return POLLUTION_LVL_COLOR.MODERATE;
        case POLLUTION_LVL.UNHEALTHY_FOR_SENSITIVE_GROUP:
            return POLLUTION_LVL_COLOR.UNHEALTHY_FOR_SENSITIVE_GROUP;
        case POLLUTION_LVL.UNHEALTHY:
            return POLLUTION_LVL_COLOR.UNHEALTHY;
        case POLLUTION_LVL.VERY_UNHEALTHY:
            return POLLUTION_LVL_COLOR.VERY_UNHEALTHY;
        case POLLUTION_LVL.HAZARDOUS:
        default:
            return POLLUTION_LVL_COLOR.HAZARDOUS;
    }
}

const getDisasterStateText = (value: number) => {
    if (value <= 0) {
        return DISASTER_LVL.NONE
    } else if (value <= 20) {
        return DISASTER_LVL.VERY_LOW;
    } else if (value <= 40) {
        return DISASTER_LVL.LOW;
    } else if (value <= 60) {
        return DISASTER_LVL.MEDIUM;
    } else if (value <= 80) {
        return DISASTER_LVL.HIGH;
    } else {
        return DISASTER_LVL.VERY_HIGH;
    }
}

const SliderContainer = (props: {
    children: React.ReactElement;
    onValueChange: (value: number) => void;
    text: string;
    sliderValue?: Array<number>;
    trackMarks?: Array<number>;
    vertical?: boolean;
}) => {
    const {sliderValue, trackMarks} = props;
    const [value, setValue] = useState(sliderValue ? sliderValue : 1);

    let renderTrackMarkComponent: React.ReactNode;


    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
        // @ts-ignore
        renderTrackMarkComponent = () => {
            let markStyle = {
                borderColor: "#ee8181",
                borderWidth: 3,
                left: 10,
            };

            return <View style={markStyle}/>;
        };
    }

    const renderChildren = () => {
        // let pollutionState: POLLUTION_LVL = getPollutionStateText(value as number);
        // let color = getPollutionColor(pollutionState);

        return React.Children.map(
            props.children,
            (child: React.ReactElement) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: (value: number) => {
                            setValue(value);
                            props.onValueChange(value / 100);
                        },
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                        // maximumTrackTintColor: color,
                        // minimumTrackTintColor: color,
                        // thumbTintColor: color
                    });
                }

                return child;
            },
        );
    };

    return (
        <View>
            <Text>{"State: " + props.text}</Text>
            {renderChildren()}
        </View>
    );
};

export default function ExposureModal(navProps: RootStackScreenProps<"ExposureModal">) {

    let props: IExposureModalProps = navProps.route.params;

    const [pollutionScore, setPollutionScore] = useState(0);
    const [disasterScore, setDisasterScore] = useState(0);

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.title}>U good bro?</Text>

            <ScrollView style={{height: "80%"}}>
                <View style={styles.container}>
                    <View style={styles.view}>
                        <Text style={styles.text}>Pollution</Text>
                    </View>
                    <SliderContainer
                        trackMarks={[10, 20, 30, 40, 60]}
                        onValueChange={value => setPollutionScore(value as number)}
                        text={getPollutionStateText(pollutionScore * 100)}
                    >
                        <Slider
                            maximumValue={100}
                            minimumValue={0}
                            step={1}
                            value={pollutionScore}
                        />
                    </SliderContainer>
                    <Text>Value: {(pollutionScore * 100).toFixed(0)}%</Text>

                    <View style={styles.view}>
                        <Text style={styles.text}>Disaster</Text>
                    </View>
                    <SliderContainer
                        trackMarks={[0, 20, 40, 60, 80, 100]}
                        onValueChange={value => setDisasterScore(value as number)}
                        text={getDisasterStateText(disasterScore * 100)}
                    >
                        <Slider
                            maximumValue={100}
                            minimumValue={0}
                            step={20}
                            value={disasterScore}
                        />
                    </SliderContainer>
                    <Text>Value: {(disasterScore * 100).toFixed(0)}%</Text>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {

                }}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        padding: 20,
    },
    container: {
        flex: 1,
    },
    button: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#DDDDDD",
    },
    view: {
        marginTop: 20,
        alignItems: "flex-start",
    },
    text: {
        fontSize: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
