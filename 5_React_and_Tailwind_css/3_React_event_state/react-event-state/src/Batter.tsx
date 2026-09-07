import { useState } from "react"

export default function Batter(){

    const [runs, setRun] = useState(0);

    const handleRun1 = () => {
        setRun(runs + 1);
    }

    const handleRun2 = () => {
        setRun(runs + 2);
    }

    const handleRun4 = () => {
        setRun(runs + 4);
    }

    const handleRun6 = () => {
        setRun(runs + 6);
    }

    return(
        <div>
            <br /><p>--------------------------------------------------</p><br />
            <p>Batter Run Score</p>
            <p>Total Run: {runs}</p>
            <button onClick={handleRun1}>1 Run</button>
            <button onClick={handleRun2}>2 Run</button>
            <button onClick={handleRun4}>4 Run</button>
            <button onClick={handleRun6}>6 Run</button>
        </div>
    )
}