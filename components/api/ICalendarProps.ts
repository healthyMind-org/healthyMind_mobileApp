import {StyleProp, ViewStyle} from "react-native";

export interface ICalendarProps {
    value: Date,
    onChange: (date: Date) => void,
    style?: StyleProp<ViewStyle>,
}
