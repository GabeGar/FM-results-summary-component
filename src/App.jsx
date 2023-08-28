import Reaction from "./components/UI/Reaction";
import Memory from "./components/UI/Memory";
import Verbal from "./components/UI/Verbal";
import Visual from "./components/UI/Visual";

const App = () => {
    return (
        <main className="container">
            <main className="your--results">
                <h2 className="title">Your Result</h2>
                <div className="score--container">
                    <span className="your--score">76</span>
                    <span className="possible--score">of 100</span>
                </div>
                <h2 className="result--indicator">Great</h2>
                <p className="result--description">
                    You scored higher than 65% of the people who have taken
                    these tests.
                </p>
            </main>

            <main className="breakdown--summary">
                <section className="breakdown--title">
                    <h2>Summary</h2>
                </section>
                <section className="summary reaction">
                    <div className="left--side">
                        <Reaction />
                        <h3>Reaction</h3>
                    </div>
                    <div className="right--side">
                        <span className="individual--score">80</span>
                        <span>/</span>
                        <span className="total--score">100</span>
                    </div>
                </section>
                <section className="summary memory">
                    <div className="left--side">
                        <Memory />
                        <h3>Memory</h3>
                    </div>
                    <div className="right--side">
                        <span className="individual--score">92</span>
                        <span>/</span>
                        <span className="total--score">100</span>
                    </div>
                </section>
                <section className="summary verbal">
                    <div className="left--side">
                        <Verbal />
                        <h3>Verbal</h3>
                    </div>
                    <div className="right--side">
                        <span className="individual--score">61</span>
                        <span>/</span>
                        <span className="total--score">100</span>
                    </div>
                </section>
                <section className="summary visual">
                    <div className="left--side">
                        <Visual />
                        <h3>Visual</h3>
                    </div>
                    <div className="right--side">
                        <span className="individual--score">72</span>
                        <span>/</span>
                        <span className="total--score">100</span>
                    </div>
                </section>
                <section className="summary action">
                    <button id="continue">Continue</button>
                </section>
            </main>
        </main>
    );
};

export default App;
