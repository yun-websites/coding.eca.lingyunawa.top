import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide06() {
    return (
        <Slide>
            <Kicker>PARAMETERS · RECEIVE DATA</Kicker>
            <h2>
                One function.
                <br />
                Different inputs.
            </h2>
            <CodeBlock>{'def greet(name):\n    print("Hello,", name)\n\ngreet("Mina")\ngreet("Alex")'}</CodeBlock>
            <p className="tip">
                <InlineCode>name</InlineCode> is the parameter. The values passed into the calls are the arguments.
            </p>
        </Slide>
    );
}
