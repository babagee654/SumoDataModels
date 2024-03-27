import { BashoData, MatchupData, WrestlerData } from "./Types";
export class Basho implements BashoData {
    bashoId?: number;
    bashoName?: string;
    venue?: string;
    startDate?: Date;
    endDate?: Date;
    city?: string;

    constructor(json?: any) {
        const data = json as BashoData;
        if (data) {
            Object.assign(this, data);
            if (data.startDate && data.endDate) {
                this.startDate = new Date(json?.startDate);
                this.endDate = new Date(json?.endDate);
            }
        }
    }

    public toString(): string {
        return `${this.bashoId}, ${this.bashoName}, ${this.venue}, ${this.startDate?.toDateString()}, ${this.endDate?.toDateString()}, ${this.city}\n`;
    }
}

export class Wrestler implements WrestlerData {
    wrestlerId?: number;
    name?: string;
    nationality?: string;
    height?: number;
    weight?: number;
    heya?: string;
    age?: number;
    highestRank?: string;
    currentRank?: string;
    currentDivision?: string;
    debut?: Date;
    careerWins?: number;
    careerLosses?: number;
    currentBashoRecord?: string;

    constructor(json?: any) {
        const data = json as WrestlerData;
        if (data) {
            Object.assign(this, data);
        }
    }

    public toString(): string {
        return `${this.wrestlerId}, ${this.name}, ${this.currentRank}, ${this.currentBashoRecord}`;
    }
}

export class Matchup implements MatchupData {
    matchupId?: number;
    basho?: Basho;
    wrestler1?: Wrestler;
    wrestler2?: Wrestler;
    matchupDay?: number;
    matchupRecord?: string;
    matchupStatus?: string;
    matchupDivision?: string;
    kimarite?: string;
    winner?: Wrestler;
    loser?: Wrestler;

    constructor(json?: any) {
        const data = json as MatchupData;
        if (data) {
            Object.assign(this, data);
        }
    }

    public toString(): string {
        return `${this.wrestler1?.wrestlerId}, ${this.wrestler2?.wrestlerId}, ${this.matchupRecord}, ${this.basho?.bashoId}, ${this.matchupDay}, ${this.matchupDivision}, ${this.matchupStatus}${
            this.kimarite ? `, ${this?.winner?.name}, ${this.kimarite}` : ""
        }`;
    }
}
