export class EmotionData {
    public angerLevel: number;
    public distressLevel: number;
    public overwhelmLevel: number;
    public happinessLevel: number;
    public fearLevel: number;
    public disgustLevel: number;
    public calmnessLevel: number;
    public anxietyLevel: number;
    public depressionLevel: number;


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