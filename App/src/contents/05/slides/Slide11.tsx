import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide11() {
    return (
        <Slide>
            <Kicker>BUILD · RANDOM CHALLENGE</Kicker>
            <h2>Use a random target.</h2>
            <CodeBlock>
                {
                    'import random\n\ntarget = random.randint(1, 10)\n\nfor attempt in range(1, 4):\n    guess = int(input("Guess: "))\n    if guess == target:\n        print("You solved it!")\n        break'
                }
            </CodeBlock>
            <p className="tip">Add your own welcome function, hint function, and clear final message.</p>
        </Slide>
    );
}
