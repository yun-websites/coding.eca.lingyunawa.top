import Kicker from "../components/Kicker.js";
import { Slide } from "@eca/presentations";

export default function Slide23() {
    return (
        <Slide className="next-slide" backgroundColor="#9da6f2">
            <Kicker dark>NEXT LESSON</Kicker>
            <h2>
                Next time:
                <br />
                Make the program ask you first
            </h2>
            <div className="next-code">
                <code>input()</code> <span>👉 Take Input</span>
                <br />
                <code>print()</code> <span>👉 Give Output</span>
            </div>
            <p className="lead dark-lead">
                Turn the welcome card into a program that asks for and responds
                to a name. Keep input and output as text for now.
            </p>
        </Slide>
    );
}
