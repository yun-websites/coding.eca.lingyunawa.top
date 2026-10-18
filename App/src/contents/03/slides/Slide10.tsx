import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide10() {
    return (
        <Slide>
            <Kicker>WHILE · REPEAT UNTIL</Kicker>
            <h2>Keep going while<br />the condition is true.</h2>
            <CodeBlock>{'attempt = 1\n\nwhile attempt <= 3:\n    print("Attempt", attempt)\n    attempt = attempt + 1'}</CodeBlock>
            <p className="tip">A <InlineCode>while</InlineCode> loop must change something connected to its condition.</p>
        </Slide>
    );
}
