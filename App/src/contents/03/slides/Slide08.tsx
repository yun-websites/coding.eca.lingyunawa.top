import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide08() {
    return (
        <Slide>
            <Kicker>FOR · REPEAT FOR EACH</Kicker>
            <h2>
                Give each item
                <br />a turn.
            </h2>
            <CodeBlock>
                {'hobbies = ["coding", "music", "drawing"]\n\nfor hobby in hobbies:\n    print("I like", hobby)'}
            </CodeBlock>
            <p className="tip">The indented code runs once for every item in the list.</p>
        </Slide>
    );
}
