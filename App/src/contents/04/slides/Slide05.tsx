import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide05() {
    return (
        <Slide>
            <Kicker>CALL · RUN THE FUNCTION</Kicker>
            <h2>
                Defining is not running.
                <br />
                <em>Call it to start.</em>
            </h2>
            <CodeBlock>{'def say_hello():\n    print("Hello!")\n\nsay_hello()\nsay_hello()'}</CodeBlock>
            <p className="prompt">
                The function runs twice because <InlineCode>say_hello()</InlineCode> appears twice.
            </p>
        </Slide>
    );
}
