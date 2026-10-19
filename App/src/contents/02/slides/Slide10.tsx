import CodeBlock from "@/components/slides/CodeBlock";
import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide10() {
    return (
        <Slide>
            <Kicker>LIST · ORDERED DATA</Kicker>
            <h2>
                Keep a collection,
                <br /> then add to it.
            </h2>
            <CodeBlock>
                {
                    'hobbies = ["coding", "music"]\nhobbies.append("drawing")\n\nprint(hobbies)\nprint(hobbies[0])\nprint(len(hobbies))'
                }
            </CodeBlock>
            <p className="tip">
                Indexes start at <InlineCode>0</InlineCode>
                <br />
                <InlineCode>.append()</InlineCode> adds one item at the end.
            </p>
        </Slide>
    );
}
