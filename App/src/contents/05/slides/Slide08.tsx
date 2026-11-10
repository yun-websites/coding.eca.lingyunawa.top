import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide08() {
    return (
        <Slide>
            <Kicker>LIBRARY + YOUR CODE</Kicker>
            <h2>Borrowed tools can power your functions.</h2>
            <CodeBlock>
                {
                    "from random import randint\n\ndef make_question():\n    first = randint(1, 10)\n    second = randint(1, 10)\n    return first, second\n\nprint(make_question()) # (3, 7)"
                }
            </CodeBlock>
            <p className="lead">The imported function and your own function can work together.</p>
        </Slide>
    );
}
