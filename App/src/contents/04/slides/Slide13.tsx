import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide13() {
    return (
        <Slide>
            <Kicker>THE FUNCTION CHALLENGE</Kicker>
            <h2>
                Build a program
                <br />
                from small jobs.
            </h2>
            <div className="goal-grid">
                <div className="goal">
                    <b>show_welcome</b> → <span>greet the player</span>
                </div>
                <div className="goal">
                    <b>get_level</b> → <span>return a level</span>
                </div>
                <div className="goal">
                    <b>calculate_total</b> → <span>return a score</span>
                </div>
                <div className="goal">
                    <b>show_rounds</b> → <span>run a loop</span>
                </div>
            </div>
            <p className="prompt">Give each function one clear job, then call them from the main program.</p>
        </Slide>
    );
}
