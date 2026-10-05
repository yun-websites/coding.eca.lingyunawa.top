import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide07() {
    return (
        <Slide>
            <Kicker>CONVERT WHEN NEEDED</Kicker>
            <h2>Choose `int()` or `float()`.</h2>
            <CodeBlock>
                {
                    'age = int(input("Age: "))\nheight = float(input("Height in metres: "))\n\nprint("Next year:", age + 1)\nprint("Height doubled:", height * 2)'
                }
            </CodeBlock>
            <p className="tip">`int` stores whole numbers. `float` stores decimal numbers.</p>
        </Slide>
    );
}
