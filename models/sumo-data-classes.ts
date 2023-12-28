import { BashoData } from "../types/sumo-data-types";
import { WrestlerData } from "../types/sumo-data-types";
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
}
