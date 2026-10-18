import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide05() {
    return (
        <Slide>
            <Kicker>COMPARISON OPERATORS</Kicker>
            <h2>
                Compare values
                <br />
                before you choose.
            </h2>
            <CodeBlock>{"score >= 10\nscore < 10\nscore == 10\nscore != 10"}</CodeBlock>
            <p className="tip">
                <InlineCode>&gt;</InlineCode> greater · <InlineCode>&lt;</InlineCode> less
                <br />
                <InlineCode>&gt;=</InlineCode> at least · <InlineCode>&lt;=</InlineCode> at most
                <br />
                <InlineCode>==</InlineCode> equal · <InlineCode>!=</InlineCode> not equal
            </p>
        </Slide>
    );
}

