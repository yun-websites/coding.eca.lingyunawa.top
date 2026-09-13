import CodeBlock from "../components/CodeBlock.jsx";
import Kicker from "../components/Kicker.jsx";
import Slide from "../components/Slide.jsx";

export default function Slide13() {
    return (
        <section>
            <Slide className="practice-slide">
                <Kicker>READ THE CODE</Kicker>
                <h2>Predict the output</h2>
                <div className="split">
                    <CodeBlock>
                        {
                            'pet = "Milo"\nage = 12\n\nprint(pet)\nprint(age)\nprint("pet")'
                        }
                    </CodeBlock>
                </div>
            </Slide>
            <Slide className="practice-slide">
                <Kicker>READ THE CODE</Kicker>
                <h2>Predict the output</h2>
                <div className="split">
                    <CodeBlock>
                        {
                            'pet = "Milo"\nage = 12\n\nprint(pet)\nprint(age)\nprint("pet")'
                        }
                    </CodeBlock>
                </div>
                <div className="prediction">
                    <div>Milo</div>
                    <div>12</div>
                    <div>pet</div>
                </div>
            </Slide>
        </section>
    );
}
