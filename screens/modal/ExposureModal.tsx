import {RootStackScreenProps} from "../../types";
import {IExposureModalProps} from "./api/IExposureModalProps";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Slider} from "@miblanchard/react-native-slider";
import {MentalState} from "../../domain/MentalState";
import {ExposureData} from "../../domain/ExposureData";
import {Day} from "../../domain/Day";
import {DayLogger} from "../../application/DayLogger";

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

type SliderContainer = {
    children: React.ReactElement;
    onValueChange: (value: number) => void;
    text: string;
    sliderValue?: number | Array<number>;
    trackMarks?: Array<number>;
    vertical?: boolean;
}

const SliderContainer = (props: SliderContainer) => {
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

        return React.Children.map(
            props.children,
            (child: React.ReactElement) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: (value: number) => {
                            setValue(value);
                            props.onValueChange(value);
                        },
                        renderTrackMarkComponent: renderTrackMarkComponent,
                        trackMarks: trackMarks,
                        value: value
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let mentalState = MentalState.getInstance();

        for (let i = 0; i < mentalState.days.length; i++) {
            if (mentalState.days[i].date.toISOString() === props.date.toISOString()) {
                if(mentalState.days[i].exposureData != null) {
                    setAllScores(mentalState.days[i].exposureData as ExposureData);
                }
            }
        }

        setIsLoading(false);
    }, []);

    function setAllScores(exposureData: ExposureData) {
        setPollutionScore(exposureData.pollutionLevel);
        setDisasterScore(exposureData.disasterLevel);
    }

    return isLoading ? (
        <></>
    ) : (
        <View style={styles.outerContainer}>
            <Text style={styles.title}>What is the pollution level in your area?</Text>

            <ScrollView style={{height: "80%"}}>
                <View style={styles.container}>
                    <View style={styles.view}>
                        <Text style={styles.text}>Pollution</Text>
                    </View>
                    <SliderContainer
                        trackMarks={[10, 20, 30, 40, 60]}
                        onValueChange={value => setPollutionScore(value as number)}
                        text={getPollutionStateText(pollutionScore)}
                        sliderValue={pollutionScore}
                    >
                        <Slider
                            maximumValue={100}
                            minimumValue={0}
                            step={1}
                        />
                    </SliderContainer>
                    <Text style={styles.value}>Value: {pollutionScore}%</Text>

                    <Text style={styles.title}>Did any Disasters happen in your area?</Text>

                    <View style={styles.view}>
                        <Text style={styles.text}>Disaster</Text>
                    </View>
                    <SliderContainer
                        trackMarks={[0, 20, 40, 60, 80, 100]}
                        onValueChange={value => setDisasterScore(value as number)}
                        text={getDisasterStateText(disasterScore)}
                        sliderValue={disasterScore}
                    >
                        <Slider
                            maximumValue={100}
                            minimumValue={0}
                            step={20}
                        />
                    </SliderContainer>
                    <Text>Value: {disasterScore}%</Text>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    let day = new Day(props.date);
                    let dayLogger = new DayLogger(day);
                    dayLogger.logExposure(pollutionScore, disasterScore);
                    navProps.navigation.goBack();
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
    value: {
      marginBottom: 15,
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
