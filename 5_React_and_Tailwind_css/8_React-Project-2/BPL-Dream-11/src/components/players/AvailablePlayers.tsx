import type { Iplayer } from "../../types/player";
import PlayerCard from "./PlayerCard";



interface AvailablePlayersProps {
  players: Iplayer[];
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
  return (
    <div>
      {players.map((player: Iplayer, index:number) => {
        return <PlayerCard key={index} player={player} />;
      })}
    </div>
  );
};

export default AvailablePlayers;