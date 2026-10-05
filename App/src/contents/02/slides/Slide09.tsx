import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide09() {
    return (
        <Slide>
            <Kicker>STR · INT · FLOAT</Kicker>
            <h2>
                Basic processing <br /> changes values.
            </h2>
            <CodeBlock>
                {
                    'name = "Mina"\ncity = "Suzhou"\nage = 13\nheight = 1.58\n\nprint(name + " lives in " + city)\nage = age + 1\nheight = height + 0.02\nprint(age, height)'
                }
            </CodeBlock>
        </Slide>
    );
}
