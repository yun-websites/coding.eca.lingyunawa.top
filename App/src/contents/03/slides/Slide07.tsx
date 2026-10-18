import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide07() {
    return (
        <Slide>
            <Kicker>WATCH THE SYMBOL</Kicker>
            <h2><InlineCode>=</InlineCode> stores.<br /><InlineCode>==</InlineCode> compares.</h2>
            <div className="split"><CodeBlock>{'level = "explorer"\n\nif level == "explorer":\n    print("Keep exploring!")'}</CodeBlock><div><p className="lead">Use <InlineCode>=</InlineCode> to put a value into a variable.</p><p className="tip">Use <InlineCode>==</InlineCode> to ask whether two values are equal.</p></div></div>
        </Slide>
    );
}
