export class Basho {
    constructor(json) {
        const data = json;
        if (data) {
            Object.assign(this, data);
            if (data.startDate && data.endDate) {
                this.startDate = new Date(json?.startDate);
                this.endDate = new Date(json?.endDate);
            }
        }
    }
    toString() {
        return `${this.bashoId}, ${this.bashoName}, ${this.venue}, ${this.startDate?.toDateString()}, ${this.endDate?.toDateString()}, ${this.city}\n`;
    }
}
export class Wrestler {
    constructor(json) {
        const data = json;
        if (data) {
            Object.assign(this, data);
        }
    }
    toString() {
        return `${this.wrestlerId}, ${this.name}, ${this.currentRank}, ${this.currentBashoRecord}`;
    }
}
export class Matchup {
    constructor(json) {
        const data = json;
        if (data) {
            Object.assign(this, data);
        }
    }
    toString() {
        return `${this.wrestler1?.wrestlerId}, ${this.wrestler2?.wrestlerId}, ${this.matchupRecord}, ${this.basho?.bashoId}, ${this.matchupDay}, ${this.matchupDivision}, ${this.matchupStatus}${this.kimarite ? `, ${this?.winner?.name}, ${this.kimarite}` : ""}`;
    }
}
