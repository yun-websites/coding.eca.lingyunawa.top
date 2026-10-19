import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide15() {
    return (
        <Slide>
            <Kicker>EXIT CHECK</Kicker>
            <h2>
                Explain your choices,
                <br />
                then run your program.
            </h2>
            <div className="goal-grid">
                <div className="goal">
                    <b>1</b> → <span>What does == do?</span>
                </div>
                <div className="goal">
                    <b>2</b> → <span>How many for rounds?</span>
                </div>
                <div className="goal">
                    <b>3</b> → <span>What ends while?</span>
                </div>
                <div className="goal">
                    <b>4</b> → <span>Where is the indentation?</span>
                </div>
            </div>
        </Slide>
    );
}
