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
    highest_rank?: string;
    current_rank?: string;
    current_division?: string;
    debut?: Date;
    career_wins?: number;
    career_losses?: number;
    current_basho_record?: string;
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
