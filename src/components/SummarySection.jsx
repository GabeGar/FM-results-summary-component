import Reaction from "./UI/Reaction";
import Memory from "./UI/Memory";
import Verbal from "./UI/Verbal";
import Visual from "./UI/Visual";

const SummarySection = ({ category, score }) => {
    const classes = `summary ${category}`.toLowerCase();

    return (
        <section className={classes}>
            <div className="left--side">
                {category === "Reaction" && <Reaction />}
                {category === "Memory" && <Memory />}
                {category === "Verbal" && <Verbal />}
                {category === "Visual" && <Visual />}
                <h3>Reaction</h3>
            </div>
            <div className="right--side">
                <span className="individual--score">{score}</span>
                <span>/</span>
                <span className="total--score">100</span>
            </div>
        </section>
    );
};

export default SummarySection;
