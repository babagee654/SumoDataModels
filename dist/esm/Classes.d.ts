import { BashoData, MatchupData, WrestlerData } from "./Types";
export declare class Basho implements BashoData {
    bashoId?: number;
    bashoName?: string;
    venue?: string;
    startDate?: Date;
    endDate?: Date;
    city?: string;
    constructor(json?: any);
    toString(): string;
}
export declare class Wrestler implements WrestlerData {
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
    constructor(json?: any);
    toString(): string;
}
export declare class Matchup implements MatchupData {
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
    constructor(json?: any);
    toString(): string;
}
