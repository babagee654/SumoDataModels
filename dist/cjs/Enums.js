"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoDBPages = exports.Divisions = exports.Status = exports.Ranks = void 0;
var Ranks;
(function (Ranks) {
    Ranks["Y"] = "Yokozuna";
    Ranks["O"] = "Ozeki";
    Ranks["S"] = "Sekiwake";
    Ranks["K"] = "Komusubi";
    Ranks["M"] = "Makuuchi";
    Ranks["J"] = "Juryo";
})(Ranks || (exports.Ranks = Ranks = {}));
var Status;
(function (Status) {
    Status["Upcoming"] = "Upcoming";
    Status["Pending"] = "Pending";
    Status["Completed"] = "Completed";
})(Status || (exports.Status = Status = {}));
var Divisions;
(function (Divisions) {
    Divisions["Makuuchi"] = "Makuuchi";
    Divisions["Juryo"] = "Juryo";
})(Divisions || (exports.Divisions = Divisions = {}));
var SumoDBPages;
(function (SumoDBPages) {
    SumoDBPages["Rikishi"] = "https://sumodb.sumogames.de/Rikishi.aspx";
    SumoDBPages["Basho"] = "https://sumodb.sumogames.de/Banzuke.aspx";
    SumoDBPages["RikishiBasho"] = "https://sumodb.sumogames.de/Rikishi_basho.aspx";
    SumoDBPages["BashoResultsByDay"] = "https://sumodb.sumogames.de/Results.aspx";
})(SumoDBPages || (exports.SumoDBPages = SumoDBPages = {}));
