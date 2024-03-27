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
    highestRank?: string;
    currentRank?: string;
    currentDivision?: string;
    debut?: Date;
    careerWins?: number;
    careerLosses?: number;
    currentBashoRecord?: string;
    constructor(json?: any);
    toString(): string;
}
export declare class Matchup implements MatchupData {
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
    constructor(json?: any);
    toString(): string;
}
