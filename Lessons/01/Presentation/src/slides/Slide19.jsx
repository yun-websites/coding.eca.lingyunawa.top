import Kicker from "../components/Kicker.jsx";
import Slide from "../components/Slide.jsx";

export default function Slide19() {
    return (
        <section>
            <Slide>
                <Kicker>BEFORE YOU RUN</Kicker>
                <h2>Your submission checklist</h2>
                <ul className="checklist">
                    <li>
                        Does every piece of text have matching quotation marks?
                    </li>
                    <li>
                        Do variable names avoid spaces, hyphens, and leading
                        numbers?
                    </li>
                    <li>
                        Should <code>name</code> in <code>print(name)</code> be
                        outside quotation marks?
                    </li>
                    <li>Does the output match what I wanted to show?</li>
                </ul>
            </Slide>
            <Slide>
                <Kicker>BEFORE YOU RUN</Kicker>
                <h2>Useful Tip</h2>
                <p className="tip">
                    Run it once, then read the output. <br />
                    Treat any error as your next clue.
                </p>
            </Slide>
        </section>
    );
}
