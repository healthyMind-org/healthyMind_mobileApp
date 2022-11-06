import {EmotionData} from "./EmotionData";
import {SleepData} from "./SleepData";
import {ExposureData} from "./ExposureData";

export class Day {
    readonly date: Date;
    public emotionData: EmotionData | undefined;
    public sleepData: SleepData | undefined;
    public exposureData: ExposureData | undefined;

    constructor(date: Date, emotionData?: EmotionData, sleepData?: SleepData, exposureData?: ExposureData) {
        this.date = date;
        this.emotionData = emotionData;
        this.sleepData = sleepData;
        this.exposureData = exposureData;
    }
}
