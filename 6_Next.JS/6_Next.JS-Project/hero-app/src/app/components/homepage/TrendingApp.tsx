const getAllApps = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}

const TrendingApp = async () => {
    const data = await getAllApps();
    console.log(data);
    return (
        <div className="my-20">
            <div className="space-y-4 max-w-100 mx-auto text-center">
                <h2 className="font-bold text-4xl">Trending Apps</h2>
                <p>Explore all trending apps on the market developed by top developers.</p>
            </div>
        </div>
    );
};

export default TrendingApp;