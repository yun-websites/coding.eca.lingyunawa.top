import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide08() {
    return (
        <Slide>
            <Kicker>QUICK PRACTICE · 3 MIN</Kicker>
            <h2>Match the value to its type.</h2>
            <div className="quote-card">
                <p>"blue" &nbsp; 42 &nbsp; 3.14</p>
                <p>["red", "blue"]</p>
                <p>{'{"subject": "Python"}'} &nbsp; (31.2, 120.6)</p>
            </div>
            <p className="hint">
                Write: <InlineCode>str</InlineCode>, <InlineCode>int</InlineCode>, <InlineCode>float</InlineCode>,{" "}
                <InlineCode>list</InlineCode>, <InlineCode>dict</InlineCode>, or <InlineCode>tuple</InlineCode>.
            </p>
        </Slide>
    );
}
