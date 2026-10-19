import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide12() {
    return (
        <Slide>
            <Kicker>PUT IT TOGETHER</Kicker>
            <h2>
                Input → decide →<br />
                repeat → finish.
            </h2>
            <CodeBlock>
                {
                    'target = int(input("Target: "))\n\nif target >= 8:\n    level = "advanced"\nelif target >= 4:\n    level = "explorer"\nelse:\n    level = "beginner"\n\nfor round_number in range(1, 4):\n    print("Round", round_number)'
                }
            </CodeBlock>
        </Slide>
    );
}
