import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide04() {
    return (
        <Slide>
            <Kicker>DEF · DEFINE A FUNCTION</Kicker>
            <h2>
                Give your steps
                <br />a name.
            </h2>
            <CodeBlock>{'def say_hello():\n    print("Hello!")'}</CodeBlock>
            <p className="tip">The indented code belongs to the function. The colon starts the function body.</p>
        </Slide>
    );
}
