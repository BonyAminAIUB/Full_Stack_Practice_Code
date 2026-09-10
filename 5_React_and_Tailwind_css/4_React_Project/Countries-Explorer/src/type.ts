export interface CountryType{
    name : {
        "common" : string,
        "official" : string
    },
    ccn3 : {
        'ccn3' : string
    },
    capital : {
        'capital' : string,
    },
    population : {
        'population' : string,
    },
    region : {
        'region' : string,
    },
    area : {
        'area' : number,
    }, 
    continents : {
        'continents' : string,
    },
    currencies : {
        currencies : {
            JMD : {
                'name' : string,
                'symbol' : string,
            }
        }
    },
    flags: {
        flags: {
            "png" : string,
            "alt" : string
        }
    }
}