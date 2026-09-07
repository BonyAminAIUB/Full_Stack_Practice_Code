import SportCard from "./SportCart";
import type { SportType } from "./types";

const sports : SportType[] = [
    {name : 'Football', players : 11},
    {name : 'Cricket', players : 11},
    {name : 'Kabadi', players : 9},
    {name : 'Chess', players : 2},
]

export default function Sports(){
    return(
        <div>
            {
                sports.map(sport => <SportCard name={sport.name} players={sport.players}></SportCard>)
            }
        </div>
    )
}


