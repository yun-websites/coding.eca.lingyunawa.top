import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide09() {
    return (
        <Slide>
            <Kicker>RANGE · COUNT ROUNDS</Kicker>
            <h2>
                Repeat a known
                <br />
                number of times.
            </h2>
            <CodeBlock>{'for round_number in range(1, 4):\n    print("Round", round_number)'}</CodeBlock>
            <p className="prompt">
                <InlineCode>range(1, 4)</InlineCode> gives 1, 2, 3. The ending number is not included.
            </p>
        </Slide>
    );
}
