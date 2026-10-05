import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide06() {
    return (
        <Slide>
            <Kicker>INPUT HAS A TYPE</Kicker>
            <h2>Text that looks like a number is still text.</h2>
            <div className="split">
                <CodeBlock>{'age = input("How old are you? ")\nprint(age + 2)'}</CodeBlock>
                <div className="repair-rules">
                    <b>Make it calculable:</b>
                    <CodeBlock>{'age = int(input("How old are you? "))\nprint(age + 2)'}</CodeBlock>
                </div>
            </div>
        </Slide>
    );
}
