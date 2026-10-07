import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide07() {
    return (
        <Slide>
            <Kicker>CONVERT WHEN NEEDED</Kicker>
            <h2>
                Choose&nbsp;&nbsp;<code>int</code>&nbsp;&nbsp;or&nbsp;&nbsp;<code>float</code>.
            </h2>
            <CodeBlock>
                {
                    'age = int(input("Age: "))\nheight = float(input("Height in metres: "))\n\nprint("Next year:", age + 1)\nprint("Height doubled:", height * 2)'
                }
            </CodeBlock>
            <p className="tip">
                <code>int</code> stores whole numbers.
                <br />
                <code>float</code> stores decimal numbers.
            </p>
        </Slide>
    );
}

