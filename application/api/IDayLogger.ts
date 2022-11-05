import {MentalState} from "../../domain/MentalState";
import {Day} from "../../domain/Day";

export interface IDayLogger {
    mentalState: MentalState;
    day: Day;

    logSleep:(bedTime: Date, wakeUpTime: Date, quality: number) => void;
    logEmotions:(angerLevel: number, distressLevel: number, overwhelmLevel: number, happinessLevel: number, fearLevel: number, disgustLevel: number, calmnessLevel: number, anxietyLevel: number, depressionLevel: number) => void;
}