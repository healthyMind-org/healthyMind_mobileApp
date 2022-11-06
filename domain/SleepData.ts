export class SleepData {
    readonly bedTime: Date;
    readonly wakeUpTime: Date;
    public quality: number;


    constructor(bedTime: Date, wakeUpTime: Date, quality: number) {
        this.bedTime = bedTime;
        this.wakeUpTime = wakeUpTime;
        this.quality = quality;
    }
}