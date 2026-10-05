import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide13() {
    return (
        <Stack>
            <Slide className="practice-slide">
                <Kicker>READ THE CODE</Kicker>
                <h2>Predict the output</h2>
                <div className="split">
                    <CodeBlock>{'pet = "Milo"\nage = 12\n\nprint(pet)\nprint(age)\nprint("pet")'}</CodeBlock>
                </div>
            </Slide>
            <Slide className="practice-slide">
                <Kicker>READ THE CODE</Kicker>
                <h2>Predict the output</h2>
                <div className="split">
                    <CodeBlock>{'pet = "Milo"\nage = 12\n\nprint(pet)\nprint(age)\nprint("pet")'}</CodeBlock>
                </div>
                <div className="prediction">
                    <div>Milo</div>
                    <div>12</div>
                    <div>pet</div>
                </div>
            </Slide>
        </Stack>
    );
}
