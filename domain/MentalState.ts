import {Day} from "./Day";

export class MentalState {
    readonly anxietyScore: number;
    readonly depressionScore: number;
    readonly days: Array<Day>;

    constructor(anxietyScore: number, depressionScore: number) {
        this.anxietyScore = anxietyScore;
        this.depressionScore = depressionScore;
        this.days = new Array<Day>();
    }

    addDay(day: Day){
        this.days.push(day);
    }
}