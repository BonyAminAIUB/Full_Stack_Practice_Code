import { use } from "react";
import type { Iplayer } from "../../types/player";

interface PlayerProps{
   playerPromise : Promise<Iplayer[]>,
}

const Players = ({playerPromise}:PlayerProps) => {
    const players = use(playerPromise);
    console.log(players);
    return (
        <div>
            
        </div>
    );
};

export default Players;