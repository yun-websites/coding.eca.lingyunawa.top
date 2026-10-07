import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide11() {
    return (
        <Slide>
            <Kicker>DICT · LABELLED DATA</Kicker>
            <h2>Use a key to find a value.</h2>
            <CodeBlock>
                {
                    'profile = {"name": "Mina", "city": "Suzhou"}\n\nprint(profile["name"])\nprofile["city"] = "Nanjing"\nprint(profile)'
                }
            </CodeBlock>
            <p className="tip">
                A dictionary uses meaningful keys <br /> instead of positions.
            </p>
        </Slide>
    );
}

