import { useEffect, useState } from "react";

import YourScore from "./components/YourScore";
import BreakDownSummary from "./components/BreakDownSummary";

const App = () => {
    const [yourStats, setYourStats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // * Loading state would default to true here.
            try {
                const res = await fetch("/data.json");

                // * Can throw error here to later handle said error (if one ever occurred during the fetching process)
                if (!res.ok) fetchData();

                const data = await res.json();
                setYourStats(data);
            } catch (err) {
                // * Error handling here and/or trigger some sort of error state.
                console.log(err);
            } finally {
                // * End of loading state.
            }
        };

        fetchData();
    }, []);

    // * Can introduce a page loader here -- excluded since its not part of the challenge.
    if (yourStats.length === 0) return;

    return (
        <main className="container">
            <YourScore />
            <BreakDownSummary yourStats={yourStats} />
        </main>
    );
};

export default App;
