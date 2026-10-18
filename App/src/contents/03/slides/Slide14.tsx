import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide14() {
    return (
        <Slide>
            <Kicker>CHECK YOUR LOGIC</Kicker>
            <h2>Can you point to<br />each control?</h2>
            <CodeBlock>{'attempts = 0\nanswer = 0\nwhile answer != target and attempts < 3:\n    answer = int(input("Guess: "))\n    attempts = attempts + 1\n\nif answer == target:\n    print("Correct!")\nelse:\n    print("Try again next time.")'}</CodeBlock>
            <p className="tip">Which line changes the counter? Which condition ends the loop?</p>
        </Slide>
    );
}
