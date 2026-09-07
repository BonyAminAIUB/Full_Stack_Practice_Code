import type { SportType } from "./types";

export default function SportCard({name, players}:SportType){
    return(
        <div className="sport">
            <h4>Name: {name}</h4>
            <p>Player: {players}</p>
        </div>
    )
}