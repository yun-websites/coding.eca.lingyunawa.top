import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide14() {
    return (
        <Slide>
            <Kicker>CHECK YOUR DESIGN</Kicker>
            <h2>
                Can you point to
                <br />
                each function job?
            </h2>
            <CodeBlock>
                {
                    "def calculate_total(score, bonus):\n    return score + bonus\n\nfinal_score = calculate_total(7, 2)\nprint(final_score)"
                }
            </CodeBlock>
            <p className="tip">Which values go in? What comes back? Where is the function called?</p>
            <p className="prompt">A useful function has a clear input, job, and result.</p>
        </Slide>
    );
}
