import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide09() {
    return (
        <Slide>
            <Kicker>NAME CHECK · DO NOT HIDE YOUR TOOL</Kicker>
            <h2>Do not overwrite the module.</h2>
            <CodeBlock>{"import random\n\nrandom = 5\nprint(random.randint(1, 6))"}</CodeBlock>
            <p className="lead">
                The variable <code>random</code> replaces the module name. Use a different variable name.
            </p>
        </Slide>
    );
}
