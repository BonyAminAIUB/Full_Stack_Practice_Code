import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import { TbTrash } from "react-icons/tb";

interface ISelectedPlayersCardProps {
    player: Iplayer;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
    coin : number;
    setCoin : Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({ player, selectedPlayers, setSelectedPlayers, coin, setCoin }: ISelectedPlayersCardProps) => {

    const handleRemovePlayer = (player: Iplayer) => {

        const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName);

        setSelectedPlayers(restPlayers);

        const newCoinPrice = coin + player.price;
        setCoin(newCoinPrice);
    }

    return (
        <div className="flex items-center justify-between border border-gray-200 rounded-3xl py-2 px-4">

            {/* Image + Text */}
            <div className="flex items-center gap-4">

                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-20 w-20 object-contain"
                />

                <div>
                    <h2 className="font-bold text-2xl">
                        {player.playerName}
                    </h2>

                    <p>{player.playerType}</p>
                </div>

            </div>

            {/* Delete Icon */}
            <span className="text-red-500 font-bold cursor-pointer" onClick={() => handleRemovePlayer(player)}>
                <TbTrash size={24} />
            </span>

        </div>
    );
};

export default SelectedPlayerCard;