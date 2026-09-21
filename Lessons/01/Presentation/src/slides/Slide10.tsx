import CodeBlock from "../components/CodeBlock.js";
import Kicker from "../components/Kicker.js";
import { Slide } from "@eca/presentations";

export default function Slide10() {
    return (
        <Slide className="repair-slide">
            <Kicker>PAIR DEBUGGING · 2 MIN</Kicker>
            <h2>Fix these three lines of code</h2>
            <div className="split">
                <CodeBlock>
                    {
                        'print(Welcome)\nprint("My first program)\nprint(I will keep trying.)'
                    }
                </CodeBlock>
                <div className="repair-rules">
                    <b>Look for:</b>
                    <p>□ Missing quotation marks</p>
                    <p>□ Matching parentheses</p>
                    <p>□ Text inside quotation marks</p>
                    <span>Goal: output three lines of text with no errors.</span>
                </div>
            </div>
        </Slide>
    );
}
