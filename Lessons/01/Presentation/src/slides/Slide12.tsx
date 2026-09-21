import Kicker from "../components/Kicker.js";
import { Slide } from "@eca/presentations";

export default function Slide12() {
    return (
        <section>
            <Slide>
                <Kicker>VARIABLES</Kicker>
                <h2>Without quotes, get the value</h2>
                <div className="variable-compare">
                    <div className="var-card">
                        <code>print(name)</code>
                        <br />
                        <strong>Alex</strong>
                        <br />
                        <span>Get the value inside the variable</span>
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>VARIABLES</Kicker>
                <h2>With quotes, display the word</h2>
                <div className="variable-compare">
                    <div className="var-card muted">
                        <code>print("name")</code>
                        <br />
                        <strong>name</strong>
                        <br />
                        <span>Display these four letters as written</span>
                    </div>
                </div>
            </Slide>
        </section>
    );
}
