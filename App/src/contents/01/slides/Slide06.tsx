import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide06() {
    return (
        <section>
            <Slide className="practice-slide">
                <Kicker>PREDICT → RUN → CHECK</Kicker>
                <h2>Output happens one line at a time</h2>
                <div className="split">
                    <div>
                        <span className="label">Predict first</span>
                        <CodeBlock>{'print("My name is Alex.")\nprint("I am learning Python.")'}</CodeBlock>
                    </div>
                </div>
            </Slide>
            <Slide className="practice-slide">
                <Kicker>PREDICT → RUN → CHECK</Kicker>
                <h2>Output happens one line at a time</h2>
                <div className="split">
                    <div>
                        <span className="label answer">Check after running</span>
                        <CodeBlock language="text" className="output">
                            {"My name is Alex.\nI am learning Python."}
                        </CodeBlock>
                    </div>
                </div>
                <p className="prompt">
                    Two <code>print()</code> calls create two output lines. Do not write only a general idea.
                </p>
            </Slide>
        </section>
    );
}
