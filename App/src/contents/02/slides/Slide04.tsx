import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide04() {
    return (
        <Slide>
            <Kicker>PRINT · START HERE</Kicker>
            <h2>Show values, not just words.</h2>
            <div className="split">
                <CodeBlock>{'name = "Mina"\nage = 13\n\nprint("Name:", name)\nprint("Next year:", age + 1)'}</CodeBlock>
                <div>
                    <p className="lead">`print()` can display several values together.</p>
                    <p className="tip">Numbers can be calculated before they are printed.</p>
                </div>
            </div>
        </Slide>
    );
}
