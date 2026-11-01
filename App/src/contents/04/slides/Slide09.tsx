import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide09() {
    return (
        <Slide>
            <Kicker>PRINT VS RETURN</Kicker>
            <h2>
                <InlineCode>print()</InlineCode> shows.
                <br />
                <InlineCode>return</InlineCode> hands back.
            </h2>
            <CodeBlock>
                {"def show_double(number):\n    print(number * 2)\n\ndef double(number):\n    return number * 2"}
            </CodeBlock>
            <p className="tip">
                Use <InlineCode>print()</InlineCode> for a visible message. Use <InlineCode>return</InlineCode> when the program
                needs the result.
            </p>
        </Slide>
    );
}
