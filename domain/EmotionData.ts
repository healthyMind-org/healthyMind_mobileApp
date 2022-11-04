export class EmotionData {
    private angerLevel: number;
    private distressLevel: number;
    private overwhelmLevel: number;
    private happinessLevel: number;
    private fearLevel: number;
    private disgustLevel: number;
    private calmnessLevel: number;
    private anxietyLevel: number;


    constructor(angerLevel: number, distressLevel: number, overwhelmLevel: number, hapinessLevel: number, fearLevel: number, disgustLevel: number, calmnessLevel: number, anxietyLevel: number) {
        this.angerLevel = angerLevel;
        this.distressLevel = distressLevel;
        this.overwhelmLevel = overwhelmLevel;
        this.happinessLevel = hapinessLevel;
        this.fearLevel = fearLevel;
        this.disgustLevel = disgustLevel;
        this.calmnessLevel = calmnessLevel;
        this.anxietyLevel = anxietyLevel;
    }
}