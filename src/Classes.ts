import { Divisions, Status } from "./Enums";
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
    highest_rank?: string;
    current_rank?: string;
    current_division?: string;
    debut?: Date;
    career_wins?: number;
    career_losses?: number;
    current_basho_record?: string;

    constructor(json?: any) {
        const data = json as WrestlerData;
        if (data) {
            Object.assign(this, data);
        }
    }

    public toString(): string {
        return `${this.wrestlerId}, ${this.name}, ${this.current_rank}, ${this.current_basho_record}`;
    }
}

export class Matchup implements MatchupData {
    wrestler1?: Wrestler;
    wrestler2?: Wrestler;
    winner?: Wrestler;
    loser?: Wrestler;
    matchupDay?: number;
    matchupDivision?: string;
    matchupStatus?: string;
    matchupRecord?: string;
    basho?: Basho;
    kimarite?: string;

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
