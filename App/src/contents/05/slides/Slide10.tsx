import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide10() {
    return (
        <Slide>
            <Kicker>DEBUG · READ THE ERROR</Kicker>
            <h2>Check the import, then the call.</h2>
            <CodeBlock>
                {"from random import randint\n\nvalue = random.randint(1, 6)\n# NameError: random is not defined"}
            </CodeBlock>
            <div className="check-grid">
                <div className="check">1. Is the module name spelled correctly?</div>
                <div className="check">2. Did you import the function you call?</div>
                <div className="check">3. Does the call match the import style?</div>
                <div className="check">4. Did a variable overwrite a tool name?</div>
            </div>
        </Slide>
    );
}
