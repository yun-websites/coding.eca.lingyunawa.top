import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide11() {
    return (
        <Slide>
            <Kicker>AVOID AN INFINITE LOOP</Kicker>
            <h2>
                What is missing
                <br />
                from this code?
            </h2>
            <CodeBlock>{"count = 1\nwhile count <= 3:\n    print(count)"}</CodeBlock>
            <p className="lead">The condition never changes, so the loop never ends.</p>
            <p className="tip">
                Repair it with <InlineCode>count = count + 1</InlineCode>.
            </p>
        </Slide>
    );
}
