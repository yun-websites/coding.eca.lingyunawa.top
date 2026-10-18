import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide06() {
    return (
        <Slide>
            <Kicker>IF · ELIF · ELSE</Kicker>
            <h2>Three paths.<br />One result.</h2>
            <CodeBlock>{'score = int(input("Score: "))\n\nif score >= 10:\n    print("Gold")\nelif score >= 5:\n    print("Silver")\nelse:\n    print("Try again")'}</CodeBlock>
            <p className="prompt">Python checks from top to bottom and uses the first true branch.</p>
        </Slide>
    );
}
