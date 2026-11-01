import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide07() {
    return (
        <Slide>
            <Kicker>MULTIPLE PARAMETERS</Kicker>
            <h2>
                Pass more than
                <br />
                one value.
            </h2>
            <CodeBlock>
                {
                    'def show_score(name, score):\n    print(name, "scored", score)\n\nshow_score("Mina", 8)\nshow_score("Alex", 5)'
                }
            </CodeBlock>
            <p className="prompt">Values are matched to parameters from left to right.</p>
        </Slide>
    );
}
