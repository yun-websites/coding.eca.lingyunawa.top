import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide11() {
    return (
        <Slide>
            <Kicker>FOR · REPEAT INSIDE</Kicker>
            <h2>
                A function can
                <br />
                contain a loop.
            </h2>
            <CodeBlock>
                {
                    'def show_rounds(count):\n    for round_number in range(1, count + 1):\n        print("Round", round_number)\n\nshow_rounds(3)'
                }
            </CodeBlock>
            <p className="tip">
                Change the argument to <InlineCode>show_rounds(5)</InlineCode> and the same function shows five rounds.
            </p>
        </Slide>
    );
}
