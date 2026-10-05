import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide07() {
    return (
        <Stack>
            <Slide className="practice-slide">
                <Kicker>WHAT CHANGES?</Kicker>
                <h2>Quotation marks change how Python understands code</h2>
                <div className="split compare">
                    <div>
                        <span className="label">Calculate</span>
                        <CodeBlock>print(5 + 3)</CodeBlock>
                        <div className="big-result">
                            Will give out result <b>8</b> (as a number)
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide className="practice-slide">
                <Kicker>WHAT CHANGES?</Kicker>
                <h2>Quotation marks change how Python understands code</h2>
                <div className="split compare">
                    <div>
                        <span className="label">Display as written</span>
                        <CodeBlock>print("5 + 3")</CodeBlock>
                        <div className="big-result text-result">
                            Will give out result <b>5 + 3</b> (as text)
                        </div>
                    </div>
                </div>
            </Slide>
        </Stack>
    );
}
