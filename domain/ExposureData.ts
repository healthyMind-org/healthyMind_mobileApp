export class ExposureData {
    public pollutionLevel: number;
    public disasterLevel: number;

    constructor(pollutionLevel: number, disasterLevel: number) {
        this.pollutionLevel = pollutionLevel;
        this.disasterLevel = disasterLevel;
    }
}
