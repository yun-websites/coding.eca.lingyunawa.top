import Kicker from "../components/Kicker.js";
import { Slide } from "@eca/presentations";
import CodeBlock from "../components/CodeBlock.js";

export default function Slide05() {
    return (
        <Slide>
            <Kicker>ANATOMY OF A LINE</Kicker>
            <h2>One line of code, three roles</h2>
            <div className="anatomy">
                <CodeBlock>print("Hello, world!")</CodeBlock>
                <div className="annotation">
                    <b>print</b> <span>Tell Python to display something</span>
                </div>
                <div className="annotation">
                    <b>( )</b> <span>Hold what should be displayed</span>
                </div>
                <div className="annotation">
                    <b>" "</b> <span>Mark text as a string</span>
                </div>
            </div>
            <p className="tip">
                Quotation marks are not displayed. <br />
                They tell Python, &quot;This is text.&quot;
            </p>
        </Slide>
    );
}
