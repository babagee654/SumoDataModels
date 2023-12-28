export const Divisions: string[];
export type BashoData = {
    bashoId?: number;
    bashoName?: string;
    venue?: string;
    startDate?: Date;
    endDate?: Date;
    city?: string;
};

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

export class Basho implements BashoData {
    bashoId?: number;
    bashoName?: string;
    venue?: string;
    startDate?: Date;
    endDate?: Date;
    city?: string;

    constructor(data?: any);
    public toString(): string;
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

    constructor(json?: any);

    public toString();
}
