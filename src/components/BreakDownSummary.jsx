import SummarySection from "./SummarySection";

const BreakDownSummary = ({ yourStats }) => {
    return (
        <section className="breakdown--summary">
            <section className="breakdown--title">
                <h2>Summary</h2>
            </section>
            {yourStats.map((statsObj) => {
                return (
                    <SummarySection
                        key={statsObj.category}
                        category={statsObj.category}
                        score={statsObj.score}
                    />
                );
            })}
            <section className="summary action">
                <button id="continue">Continue</button>
            </section>
        </section>
    );
};

export default BreakDownSummary;
