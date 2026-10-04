const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-linear-to-br from-[#102e1f] via-[#176b45] to-[#0b3b2a] px-6 py-16 mt-0 mb-7 md:px-12 lg:px-20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-40 border-white/5"></div>

            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-40 border-white/5"></div>
            <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300 md:text-base">
                    Bangladesh Premier League
                </p>
                <h2 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
                    Build Your
                    <span className="block text-yellow-300">
                        Dream XI
                    </span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-200 md:text-lg">
                    Pick your favorite players and create your ultimate
                    cricket team. Make your squad, choose your champions,
                    and build your Dream 11!
                </p>
                <button className="btn mt-8 rounded-full border-none bg-yellow-400 px-8 text-base font-bold text-green-950 shadow-lg transition duration-300 hover:bg-yellow-300 hover:shadow-yellow-300/30">
                    Choose Players 🏏
                </button>

            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-br from-yellow-400 via-emerald-300 to-yellow-400"></div>
        </div>
    );
};

export default Banner;