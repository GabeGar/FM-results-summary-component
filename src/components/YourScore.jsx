const YourScore = () => {
    return (
        <main className="your--results">
            <h2 className="title">Your Result</h2>
            <div className="score--container">
                <span className="your--score">76</span>
                <span className="possible--score">of 100</span>
            </div>
            <h2 className="result--indicator">Great</h2>
            <p className="result--description">
                You scored higher than 65% of the people who have taken these
                tests.
            </p>
        </main>
    );
};

export default YourScore;
