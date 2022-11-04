export class SleepData {
    private bedTime: Date;
    private wakeUpTime: Date;
    private quality: number;


    constructor(bedTime: Date, wakeUpTime: Date, quality: number) {
        this.bedTime = bedTime;
        this.wakeUpTime = wakeUpTime;
        this.quality = quality;
    }
}