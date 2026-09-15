import { use } from "react";
import type { Iplayer } from "../../types/player";
import AvailablePlayers from "./AvailablePlayers";

interface PlayerProps{
   playersPromise : Promise<Iplayer[]>,
}

const Players = ({playersPromise}:PlayerProps) => {
    const players = use(playersPromise);
    return (
        <div className="container mx-auto">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl">Available Players</h2>
                <div>
                    <button className="btn btn-warning">Available</button>
                    <button className="btn">Selected</button>
                </div>
            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;