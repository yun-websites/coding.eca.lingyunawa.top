import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide19() {
    return (
        <Stack>
            <Slide>
                <Kicker>BEFORE YOU RUN</Kicker>
                <h2>Your submission checklist</h2>
                <ul className="checklist">
                    <li>Does every piece of text have matching quotation marks?</li>
                    <li>Do variable names avoid spaces, hyphens, and leading numbers?</li>
                    <li>
                        Should <code>name</code> in <code>print(name)</code> be outside quotation marks?
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
        </Stack>
    );
}
