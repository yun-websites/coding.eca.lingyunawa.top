import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide03() {
    return (
        <Slide>
            <Kicker>MODULES · TOOLBOXES</Kicker>
            <h2>A module is a toolbox.</h2>
            <div className="split">
                <CodeBlock>{'import random\n\nnumber = random.randint(1, 6)\nprint("You rolled", number)'}</CodeBlock>
                <div>
                    <p className="lead">
                        <strong>Module:</strong> reusable Python code.
                    </p>
                    <p className="tip">The standard library is a collection of tools included with Python.</p>
                </div>
            </div>
        </Slide>
    );
}
