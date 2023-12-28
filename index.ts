//#region Classes
export type BashoData = {
    bashoId?: number;
    bashoName?: string;
    venue?: string;
    startDate?: Date;
    endDate?: Date;
    city?: string;
};

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

export type WrestlerData = {
    wrestler_id?: number;
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
};

export class Wrestler implements WrestlerData {
    wrestler_id?: number;
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

    constructor(data?: WrestlerData) {
        if (data) {
            Object.assign(this, data);
        }
    }

    public toString(): string {
        return `${this.wrestler_id}, ${this.name}, ${this.current_rank}, ${this.current_basho_record}`;
    }

    fromJSON(json: any): Wrestler {
        const data: WrestlerData = json as WrestlerData;
        const wrestler: Wrestler = new Wrestler();
        Object.assign(wrestler, data);
        return wrestler;
    }

    toJSON(): object {
        return {
            wrestler_id: this.wrestler_id,
            name: this.name,
            nationality: this.nationality,
            height: this.height,
            weight: this.weight,
            heya: this.heya,
            age: this.age,
            highest_rank: this.highest_rank,
            current_rank: this.current_rank,
            current_division: this.current_division,
            debut: this.debut,
            career_wins: this.career_wins,
            career_losses: this.career_losses,
            current_basho_record: this.current_basho_record,
        };
    }
}
//#endregion
//#region Constants
export const Divisions: string[] = ["Makuuchi", "Juryo"];
//#endregion
//#region Enums
export enum Ranks {
    Y = "Yokozuna",
    O = "Ozeki",
    S = "Sekiwake",
    K = "Komusubi",
    M = "Makuuchi",
    J = "Juryo",
}

export enum Status {
    Upcoming = "Upcoming",
    Ongoing = "Ongoing",
    Completed = "Completed",
}
//#endregion
