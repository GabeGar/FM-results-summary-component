import { useEffect, useState } from "react";

import YourScore from "./components/YourScore";
import BreakDownSummary from "./components/BreakDownSummary";

import data from "./json/data.json";

const App = () => {
    const [hasWrapper, setHasWrapper] = useState(true);
    const [yourStats] = useState(data);

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
