export class ExposureData {
    readonly pollutionLevel: number;
    readonly disasterLevel: number;

    constructor(pollutionLevel: number, disasterLevel: number) {
        this.pollutionLevel = pollutionLevel;
        this.disasterLevel = disasterLevel;
    }
}
