import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide04() {
    return (
        <Slide>
            <Kicker>IF · MAKE A DECISION</Kicker>
            <h2>Ask a question.<br />Run the indented block.</h2>
            <div className="split">
                <CodeBlock>{'age = int(input("Age: "))\n\nif age >= 13:\n    print("Join the challenge!")\nelse:\n    print("Try the beginner challenge.")'}</CodeBlock>
                <div><p className="lead">A condition is either <InlineCode>True</InlineCode> or <InlineCode>False</InlineCode>.</p><p className="tip">The colon starts the block. Indentation shows what belongs inside it.</p></div>
            </div>
        </Slide>
    );
}
