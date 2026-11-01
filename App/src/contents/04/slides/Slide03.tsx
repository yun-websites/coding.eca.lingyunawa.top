import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide03() {
    return (
        <Slide>
            <Kicker>LEARNING TARGETS</Kicker>
            <h2>
                Define a step.
                <br />
                Reuse the result.
            </h2>
            <div className="goal-grid">
                <div className="goal">
                    <b>def</b> → <span>define</span>
                </div>
                <div className="goal">
                    <b>call</b> → <span>run it</span>
                </div>
                <div className="goal">
                    <b>parameter</b> → <span>receive data</span>
                </div>
                <div className="goal">
                    <b>return</b> → <span>send a result</span>
                </div>
                <div className="goal">
                    <b>if</b> → <span>choose inside</span>
                </div>
                <div className="goal">
                    <b>for</b> → <span>repeat inside</span>
                </div>
            </div>
        </Slide>
    );
}
