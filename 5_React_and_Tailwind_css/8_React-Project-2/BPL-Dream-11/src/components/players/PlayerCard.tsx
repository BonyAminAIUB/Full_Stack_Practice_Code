import type { Iplayer } from "../../types/player";
import 

const PlayerCard = ({ player }: { player: Iplayer }) => {
    return (
        <div className="group w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Player Image */}
            <div className="relative m-3 overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100 dark:from-slate-800 dark:via-slate-700 dark:to-blue-950">

                <img
                    src={playerImg}
                    alt={playerName}
                    className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-64"
                />

                <div className="absolute right-3 top-3">
                    <span className="badge border-0 bg-white/90 px-3 py-3 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                        {playerType}
                    </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="px-4 pb-4 sm:px-5 sm:pb-5">

                {/* Player Name & Origin */}
                <div className="mb-4">
                    <h2 className="truncate text-xl font-bold text-base-content sm:text-2xl">
                        {playerName}
                    </h2>

                    <div className="mt-1 flex items-center gap-1.5 text-sm text-base-content/60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
                            />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>

                        <span>{origin}</span>
                    </div>
                </div>

                <div className="divider my-0 mb-4" />

                {/* Rating & Batting Style */}
                <div className="mb-4 grid grid-cols-2 gap-3">

                    <div>
                        <p className="mb-1 text-xs font-medium text-base-content/60">
                            Rating
                        </p>

                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 fill-amber-400 text-amber-400"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>

                            <span className="text-sm font-semibold text-base-content">
                                4.8
                            </span>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="mb-1 text-xs font-medium text-base-content/60">
                            Batting Style
                        </p>

                        <p className="truncate text-sm font-medium text-base-content">
                            {battingStyle}
                        </p>
                    </div>
                </div>

                {/* Player Details */}
                <div className="space-y-3 rounded-xl bg-base-200/60 p-3">

                    <div className="flex items-center justify-between gap-2">
                        <span className="text-sm text-base-content/60">
                            Bowling Style
                        </span>

                        <span className="max-w-[60%] truncate text-right text-sm font-medium text-base-content">
                            {bowlingStyle}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <span className="text-sm text-base-content/60">
                            Player Type
                        </span>

                        <span className="badge badge-sm badge-info badge-outline">
                            {playerType}
                        </span>
                    </div>
                </div>

                {/* Price & Button */}
                <div className="mt-5 flex items-center justify-between gap-3">

                    <div>
                        <p className="text-xs text-base-content/60">
                            Price
                        </p>

                        <p className="text-lg font-bold text-primary sm:text-xl">
                            ৳{price.toLocaleString("en-BD")}
                        </p>
                    </div>

                    <button className="btn btn-primary btn-sm rounded-lg px-4 shadow-sm transition hover:scale-105 sm:btn-md">
                        Choose Player
                    </button>
                </div>

            </div>
        </div>
    )
}
export default PlayerCard;