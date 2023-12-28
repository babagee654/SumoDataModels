//#region Classes
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
