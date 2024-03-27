import { Basho, Wrestler } from "./Classes";

export type BashoData = {
    bashoId?: number;
    bashoName?: string;
    venue?: string;
    startDate?: Date;
    endDate?: Date;
    city?: string;
};

export type WrestlerData = {
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
};

export type MatchupData = {
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
};
