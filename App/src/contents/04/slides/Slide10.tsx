import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide10() {
    return (
        <Slide>
            <Kicker>IF · RETURN A CHOICE</Kicker>
            <h2>
                Put a decision
                <br />
                inside a function.
            </h2>
            <CodeBlock>
                {
                    'def get_level(score):\n    if score >= 8:\n        return "advanced"\n    elif score >= 4:\n        return "explorer"\n    else:\n        return "beginner"'
                }
            </CodeBlock>
            <p className="prompt">The function hides the decision, then returns one clear result.</p>
        </Slide>
    );
}
