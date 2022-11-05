import {EmotionData} from "./EmotionData";
import {SleepData} from "./SleepData";

export class Day {
    readonly date: Date;
    public emotionData: EmotionData | undefined;
    public sleepData: SleepData | undefined;

    constructor(date: Date, emotionData?: EmotionData, sleepData?: SleepData) {
        this.date = date;
        this.emotionData = emotionData;
        this.sleepData = sleepData;
    }
}