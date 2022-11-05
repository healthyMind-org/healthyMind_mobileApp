import {IDayLogger} from "./api/IDayLogger";
import {MentalState} from "../domain/MentalState";
import {Day} from "../domain/Day";
import {SleepData} from "../domain/SleepData";
import {EmotionData} from "../domain/EmotionData";
import {ExposureData} from "../domain/ExposureData";

export class DayLogger implements IDayLogger{
    mentalState = MentalState.getInstance();
    day: Day;

    constructor(day: Day) {
        this.day = day;
    }

    logSleep(bedTime: Date, wakeUpTime: Date, quality: number): void {
        this.day.sleepData = new SleepData(bedTime, wakeUpTime, quality);
        this.mentalState.addDay(this.day);
    }

    logEmotions(angerLevel: number, distressLevel: number, overwhelmLevel: number, happinessLevel: number, fearLevel: number, disgustLevel: number, calmnessLevel: number, anxietyLevel: number, depressionLevel: number){
        this.day.emotionData = new EmotionData(angerLevel, distressLevel, overwhelmLevel, happinessLevel, fearLevel, disgustLevel, calmnessLevel, anxietyLevel, depressionLevel);
        this.mentalState.addDay(this.day);
    }

    logExposure(pollutionLevel: number, disasterLevel: number) {
        this.day.exposureData = new ExposureData(pollutionLevel, disasterLevel);
        this.mentalState.addDay(this.day);
    }
}
