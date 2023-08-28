import { useEffect, useState } from "react";

import YourScore from "./components/YourScore";
import BreakDownSummary from "./components/BreakDownSummary";

const App = () => {
    const [hasWrapper, setHasWrapper] = useState(false);
    const [yourStats, setYourStats] = useState([]);

    useEffect(() => {
        const handleResize = (e) => {
            if (e.target.innerWidth >= 576) setHasWrapper(true);
            if (e.target.innerWidth < 576) setHasWrapper(false);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
        <div className="container">
            {hasWrapper && (
                <div className="card--wrapper">
                    <YourScore />
                    <BreakDownSummary yourStats={yourStats} />
                </div>
            )}
            {!hasWrapper && (
                <>
                    <YourScore />
                    <BreakDownSummary yourStats={yourStats} />
                </>
            )}
        </div>
    );
};

export default App;
