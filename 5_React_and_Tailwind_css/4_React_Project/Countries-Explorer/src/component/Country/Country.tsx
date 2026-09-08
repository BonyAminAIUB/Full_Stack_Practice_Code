import { useState } from "react";
import type { CountryType } from "../../type"
import './Country.css';

export interface CountryProps {
    country : CountryType;
    handleVisitedCountry: (country: CountryType) => void;
    handleVisitedFlag: (flag:string) => void;
}

export default function Country({ country, handleVisitedCountry, handleVisitedFlag}: CountryProps) {
    
    const [visited, setVisited] = useState<boolean>(false);

    const handleVisited = () => {
        //setVisited(true);
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
        setVisited(!visited);
        handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Continents: {country.continents.continents}</p>
            <p>Area: {country.area.area}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'Mark as visited'
                }
            </button>
            <button 
            onClick={() => handleVisitedFlag(country.flags.flags.png)}
            >Add Flag as visited</button>
        </div>
    )
}