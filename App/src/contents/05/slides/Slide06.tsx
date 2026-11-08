import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide06() {
    return (
        <Slide>
            <Kicker>FROM · TAKE ONE TOOL</Kicker>
            <h2>Import one function directly.</h2>
            <div className="split">
                <CodeBlock>{"from random import randint\n\nnumber = randint(1, 10)\nprint(number)"}</CodeBlock>
                <div>
                    <p className="lead">
                        <InlineCode>from random import randint</InlineCode> lets us call <InlineCode>randint()</InlineCode>{" "}
                        directly.
                    </p>
                    <p className="tip">This is shorter, but the module name is less visible at the call site.</p>
                </div>
            </div>
        </Slide>
    );
}
