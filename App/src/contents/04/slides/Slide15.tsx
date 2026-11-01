import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide15() {
    return (
        <Slide>
            <Kicker>EXIT CHECK</Kicker>
            <h2>
                Explain the flow,
                <br />
                then run your program.
            </h2>
            <div className="goal-grid">
                <div className="goal">
                    <b>1</b> → <span>What does def do?</span>
                </div>
                <div className="goal">
                    <b>2</b> → <span>What is a parameter?</span>
                </div>
                <div className="goal">
                    <b>3</b> → <span>What does return send?</span>
                </div>
                <div className="goal">
                    <b>4</b> → <span>Where is the call?</span>
                </div>
            </div>
        </Slide>
    );
}
