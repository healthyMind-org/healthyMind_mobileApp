export class EmotionData {
    readonly angerLevel: number;
    readonly distressLevel: number;
    readonly overwhelmLevel: number;
    readonly happinessLevel: number;
    readonly fearLevel: number;
    readonly disgustLevel: number;
    readonly calmnessLevel: number;
    readonly anxietyLevel: number;
    readonly depressionLevel: number;


    constructor(angerLevel: number, distressLevel: number, overwhelmLevel: number, happinessLevel: number, fearLevel: number, disgustLevel: number, calmnessLevel: number, anxietyLevel: number, depressionLevel: number) {
        this.angerLevel = angerLevel;
        this.distressLevel = distressLevel;
        this.overwhelmLevel = overwhelmLevel;
        this.happinessLevel = happinessLevel;
        this.fearLevel = fearLevel;
        this.disgustLevel = disgustLevel;
        this.calmnessLevel = calmnessLevel;
        this.anxietyLevel = anxietyLevel;
        this.depressionLevel = depressionLevel;
    }
}