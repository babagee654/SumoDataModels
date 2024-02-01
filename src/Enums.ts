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

export enum Divisions {
    Makuuchi = "Makuuchi",
    Juryo = "Juryo",
}

export enum SumoDBPages {
    Rikishi = "https://sumodb.sumogames.de/Rikishi.aspx", // ?r=1197 for specific rikishi
    Basho = "https://sumodb.sumogames.de/Banzuke.aspx", // for latest Basho Banzuke
    RikishiBasho = "https://sumodb.sumogames.de/Rikishi_basho.aspx", // ?r=11927&b=202401 for specific rikishi basho record
    BashoResultsByDay = "https://sumodb.sumogames.de/Results.aspx", // ?b=202401&d=1 for specific basho day
}
