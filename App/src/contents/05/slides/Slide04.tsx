import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide04() {
    return (
        <Slide>
            <Kicker>IMPORT · BRING IN THE TOOLBOX</Kicker>
            <h2>Import the whole module.</h2>
            <div className="split">
                <CodeBlock>{"import math\n\nprint(math.sqrt(25))\nprint(math.ceil(3.2))"}</CodeBlock>
                <div>
                    <p className="lead">
                        <InlineCode>import math</InlineCode> brings the module into your program.
                    </p>
                    <p className="tip">The dot means “look inside this module”.</p>
                </div>
            </div>
        </Slide>
    );
}
