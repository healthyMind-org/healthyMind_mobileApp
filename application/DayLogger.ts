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
        let updatedDay;
        let existingDayIndex = this.mentalState.days.findIndex(x => x.date === this.day.date)
        if(existingDayIndex >= 0){
            updatedDay = this.mentalState.days[existingDayIndex];
        } else {
            updatedDay = this.day;
        }
        updatedDay.sleepData = new SleepData(bedTime, wakeUpTime, quality);
        this.mentalState.addDay(updatedDay);
    }

    logEmotions(angerLevel: number, distressLevel: number, overwhelmLevel: number, happinessLevel: number, fearLevel: number, disgustLevel: number, calmnessLevel: number, anxietyLevel: number, depressionLevel: number){
        let updatedDay;
        let existingDayIndex = this.mentalState.days.findIndex(x => x.date === this.day.date)
        if(existingDayIndex >= 0){
            updatedDay = this.mentalState.days[existingDayIndex];
        } else {
            updatedDay = this.day;
        }
        updatedDay.emotionData = new EmotionData(angerLevel, distressLevel, overwhelmLevel, happinessLevel, fearLevel, disgustLevel, calmnessLevel, anxietyLevel, depressionLevel);
        this.mentalState.addDay(updatedDay);
    }

    logExposure(pollutionLevel: number, disasterLevel: number) {
        let updatedDay;
        let existingDayIndex = this.mentalState.days.findIndex(x => x.date === this.day.date)
        if(existingDayIndex >= 0){
            updatedDay = this.mentalState.days[existingDayIndex];
        } else {
            updatedDay = this.day;
        }
        updatedDay.exposureData = new ExposureData(pollutionLevel, disasterLevel);
        this.mentalState.addDay(updatedDay);
    }
}
