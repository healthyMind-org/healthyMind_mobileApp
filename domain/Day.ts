import {EmotionData} from "./EmotionData";
import {SleepData} from "./SleepData";

export class Day {
    readonly emotionData: EmotionData;
    readonly sleepData: SleepData;

    constructor(emotionData: EmotionData, sleepData: SleepData) {
        this.emotionData = emotionData;
        this.sleepData = sleepData;
    }
}