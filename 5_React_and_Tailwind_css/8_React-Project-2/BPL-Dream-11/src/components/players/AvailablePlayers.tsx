import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import PlayerCard from "./PlayerCard";



interface AvailablePlayersProps {
  players: Iplayer[];
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
  selectedPlayers : Iplayer[];
  setSelectedPlayers : Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) => {
  
  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player: Iplayer, index:number) => {
        return <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>;
      })}
    </div>
  );
};

export default AvailablePlayers;