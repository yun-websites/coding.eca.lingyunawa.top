import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide04() {
    return (
        <Slide className="code-hero">
            <Kicker>FIRST LINE OF PYTHON</Kicker>
            <h2>Predict first, then run.</h2>
            <CodeBlock>print("Hello, Coding Club!")</CodeBlock>
            <p className="prompt">
                What will this program display? <br /> Which part is the instruction, and which part is text?
            </p>
            <aside className="notes">
                Show the code without running it first. Ask students to predict. Then point out that print is the instruction,
                parentheses hold the content, and quoted text is a string.
            </aside>
        </Slide>
    );
}
