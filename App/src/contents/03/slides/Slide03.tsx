import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide03() {
    return (
        <Slide>
            <Kicker>LEARNING TARGETS</Kicker>
            <h2>Choose a path.<br />Repeat with control.</h2>
            <div className="goal-grid">
                <div className="goal"><b>if</b> → <span>choose</span></div>
                <div className="goal"><b>elif</b> → <span>another choice</span></div>
                <div className="goal"><b>else</b> → <span>fallback</span></div>
                <div className="goal"><b>for</b> → <span>repeat for each</span></div>
                <div className="goal"><b>range()</b> → <span>count rounds</span></div>
                <div className="goal"><b>while</b> → <span>repeat until</span></div>
            </div>
        </Slide>
    );
}
