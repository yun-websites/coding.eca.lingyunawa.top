import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide05() {
    return (
        <Slide>
            <Kicker>READ THE CALL</Kicker>
            <h2>Module, dot, function.</h2>
            <CodeBlock>{"random.randint(1, 10)\n   │       │\n module  function"}</CodeBlock>
            <p className="lead">
                After <code>import random</code>, write <code>random.randint()</code> — not just <code>randint()</code>.
            </p>
        </Slide>
    );
}
