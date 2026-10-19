import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide07() {
    return (
        <Slide>
            <Kicker>CONVERT WHEN NEEDED</Kicker>
            <h2>
                Choose&nbsp;&nbsp;<InlineCode>int</InlineCode>&nbsp;&nbsp;or&nbsp;&nbsp;<InlineCode>float</InlineCode>.
            </h2>
            <CodeBlock>
                {
                    'age = int(input("Age: "))\nheight = float(input("Height in metres: "))\n\nprint("Next year:", age + 1)\nprint("Height doubled:", height * 2)'
                }
            </CodeBlock>
            <p className="tip">
                <InlineCode>int</InlineCode> stores whole numbers.
                <br />
                <InlineCode>float</InlineCode> stores decimal numbers.
            </p>
        </Slide>
    );
}
