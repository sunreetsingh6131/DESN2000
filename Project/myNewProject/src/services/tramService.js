export default class TramService {

    stops = {
        "Circular Quay": {
            previous: [ ],
            next: [ "Bridge Street" ],
            lat: -33.861520,
            lon: 151.210050
        },
        "Bridge Street": {
            previous: [ "Circular Quay" ],
            next: [ "Wynyard" ],
            lat: -33.864165,
            lon: 151.207460
        },
        "Wynyard": {
            previous: [ "Bridge Street" ],
            next: [ "Queen Victoria Building" ],
            lat: -33.866661,
            lon: 151.207103
        },
        "Queen Victoria Building": {
            previous: [ "Wynyard" ],
            next: [ "Town Hall" ],
            lat: -33.871571,
            lon: 151.206950
        },
        "Town Hall": {
            previous: [ "Queen Victoria Building" ],
            next: [ "Chinatown" ],
            lat: -33.874010,
            lon: 151.206993
        },
        "Chinatown": {
            previous: [ "Town Hall" ],
            next: [ "Haymarket" ],
            lat: -33.878580,
            lon: 151.205609
        },
        "Haymarket": {
            previous: [ "Chinatown" ],
            next: [ "Grand Central Concourse" ],
            lat: -33.881424,
            lon: 151.205353
        },
        "Grand Central Concourse": {
            previous: [ "Haymarket" ],
            next: [ "Central Chalmers Street" ],
            lat: -33.882396,
            lon:151.206670
        },
        "Central Chalmers Street": {
            previous: [ "Grand Central Concourse" ],
            next: [ "Surry Hills" ],
            lat: -33.884061,
            lon: 151.207700
        },
        "Surry Hills": {
            previous: [ "Central Chalmers Street" ],
            next: [ "Moore Park" ],
            lat: -33.888121,
            lon: 151.211882
        },
        "Moore Park": {
            previous: [ "Surry Hills" ],
            next: [ "ES Marks", "Royal Randwich Racecourse" ],
            lat: -33.893764,
            lon: 151.221781
        },
        "ES Marks": {
            previous: [ "Moore Park" ],
            next: [ "Kensington" ],
            lat: -33.905812,
            lon: 151.223918
        },
        "Kensington": {
            previous: [ "Carlton Street" ],
            next: [ "UNSW Anzac Parade" ],
            lat: -33.909393,
            lon: 151.223350
        },
        "UNSW Anzac Parade": {
            previous: [ "Kensington" ],
            next: [ "Kingsford" ],
            lat: -33.916669,
            lon: 151.225905
        },
        "Kingsford": {
            previous: [ "UNSW Anzac Parade" ],
            next: [ ],
            lat: -33.921839,
            lon: 151.226880
        },
        "Juniors Kingsford": {
            previous: [ "Strachan Street" ],
            next: [ ],
            lat: -33.925045,
            lon: 151.229160
        },
        "Royal Randwick Racecourse": {
            previous: [ "Moore Park" ],
            next: [ "Wansey Road" ],
            lat: -33.905180,
            lon: 151.228833
        },
        "Wansey Road": {
            previous: [ "Royal Randwich Racecourse" ],
            next: [ "UNSW High Street" ],
            lat: -33.910540,
            lon: 151.235243
        },
        "UNSW High Street": {
            previous: [ "Wansey Road" ],
            next: [ "Randwick" ],
            lat: -33.916323,
            lon: 151.235547
        },
        "Randwick": {
            previous: [ "UNSW High Street" ],
            next: [ ],
            lat: -33.917102,
            lon: 151.240562
        }
    }

    trams = {
        "": ""
    }

    constructor () {
        
    }

    getStops() {
        return Object.keys(this.stops);
    }

    searchStops(searchText) {
        return Object.keys(this.stops).filter(stop => stop.startsWith(searchText));
    }

}