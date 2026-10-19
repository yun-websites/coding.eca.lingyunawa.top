import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide13() {
    return (
        <Slide>
            <Kicker>THE CHALLENGE PROGRAM</Kicker>
            <h2>
                Build a program
                <br />
                that reacts.
            </h2>
            <div className="goal-grid">
                <div className="goal">
                    <b>input</b> → <span>collect a target</span>
                </div>
                <div className="goal">
                    <b>if</b> → <span>choose a level</span>
                </div>
                <div className="goal">
                    <b>for</b> → <span>show 3 rounds</span>
                </div>
                <div className="goal">
                    <b>while</b> → <span>allow 3 tries</span>
                </div>
            </div>
            <p className="prompt">Change the messages and values so the program feels like yours.</p>
        </Slide>
    );
}
