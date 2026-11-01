import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide08() {
    return (
        <Slide>
            <Kicker>RETURN · SEND A RESULT</Kicker>
            <h2>
                Show a value,
                <br />
                or return it.
            </h2>
            <div className="split">
                <CodeBlock>{"def double(number):\n    return number * 2\n\nresult = double(4)\nprint(result + 1)"}</CodeBlock>
                <div>
                    <p className="lead">
                        <InlineCode>return</InlineCode> sends a result back to the calling code.
                    </p>
                    <p className="tip">The result can be saved, printed, or used in another calculation.</p>
                </div>
            </div>
        </Slide>
    );
}
