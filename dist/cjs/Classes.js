"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrestler = exports.Basho = void 0;
class Basho {
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
exports.Basho = Basho;
class Wrestler {
    constructor(json) {
        const data = json;
        if (data) {
            Object.assign(this, data);
        }
    }
    toString() {
        return `${this.wrestler_id}, ${this.name}, ${this.current_rank}, ${this.current_basho_record}`;
    }
}
exports.Wrestler = Wrestler;
