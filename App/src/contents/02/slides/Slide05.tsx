import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide05() {
    return (
        <Slide>
            <Kicker>INPUT · COLLECT DATA</Kicker>
            <h2>`input()` pauses and asks.</h2>
            <CodeBlock>{'name = input("Name: ")\nage_text = input("Age: ")\n\nprint(name)\nprint(age_text)'}</CodeBlock>
            <p className="prompt">Prompt → user types → value is saved in a variable → program continues</p>
        </Slide>
    );
}
