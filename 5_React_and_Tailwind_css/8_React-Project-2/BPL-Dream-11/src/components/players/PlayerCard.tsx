import { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { toast } from "react-toastify";

interface IPlayerCardProps {
  player : Iplayer;
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
}

const PlayerCard = ({ player, coin, setCoin }: IPlayerCardProps ) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelectPlayer = () => {
        setIsSelected(true);
        const newCoinPrice = coin - player.price;
        if(newCoinPrice >= 0){
            setCoin(newCoinPrice);
            toast.success(`${player.playerName} is purchased successfully`);
        }
        else{
            toast.error("Coin is not enough to purchase");
        }
    }

    return (
        <div className="group w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

            {/* Player Image */}
            <div className="relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-48 lg:h-52"
                />

                <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur-sm sm:text-xs">
                    {player.playerType}
                </span>
            </div>

            {/* Player Name */}
            <div className="mt-4 flex items-center gap-2">
                <FaUser className="shrink-0 text-lg text-slate-700 dark:text-slate-300 sm:text-xl" />

                <h2 className="truncate text-base font-bold text-slate-800 dark:text-white sm:text-lg">
                    {player.playerName}
                </h2>
            </div>

            {/* Country & Player Type */}
            <div className="mt-3 flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2 text-xs text-slate-500 sm:text-sm">
                    <FaFlag className="shrink-0 text-slate-400" />

                    <span className="truncate">
                        {player.origin}
                    </span>
                </div>

                <span className="shrink-0 rounded-md bg-slate-100 px-2.5 py-1.5 text-[10px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 sm:text-xs">
                    {player.playerType}
                </span>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-slate-200 dark:border-slate-700" />

            {/* Rating */}
            <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                    Rating: {player.rating}
                </p>
            </div>

            {/* Batting & Bowling Style */}
            <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm">
                        Batting Style
                    </p>

                    <p className="truncate text-right text-xs text-slate-500 sm:text-sm">
                        {player.battingStyle}
                    </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm">
                        Bowling Style
                    </p>

                    <p className="max-w-[55%] truncate text-right text-xs text-slate-500 sm:text-sm">
                        {player.bowlingStyle}
                    </p>
                </div>
            </div>

            {/* Price & Button */}
            <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                        Price
                    </p>

                    <p className="truncate text-base font-extrabold text-emerald-600 sm:text-lg">
                        ${player.price.toLocaleString("en-US")}
                    </p>
                </div>

                <button onClick={() => handleSelectPlayer()} className={`rounded-lg border border-emerald-500 bg-emerald-500 px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-md sm:px-4 sm:text-sm`}
                    disabled={isSelected ? true : false}
                    >
                    {isSelected ? "Selected" : "Choose Player"}
                </button>
            </div>

        </div>
    );
};

export default PlayerCard;