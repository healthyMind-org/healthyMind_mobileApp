import {Day} from "./Day";

export class MentalState {
    private static instance: MentalState;
    readonly anxietyScore: number;
    readonly depressionScore: number;
    readonly days: Array<Day>;

    private constructor() {
        this.anxietyScore = 0;
        this.depressionScore = 0;
        this.days = new Array<Day>();
    }

    public static getInstance(): MentalState {
        if(!MentalState.instance){
            MentalState.instance = new MentalState();
        }
        return MentalState.instance;
    }

    addDay(day: Day){
        let existingDayIndex = this.days.findIndex(x => x.date === day.date)
        if(existingDayIndex >= 0){
            this.days[existingDayIndex] = day;
        } else {
            this.days.push(day);
        }
    }
}