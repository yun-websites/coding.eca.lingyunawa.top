import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide12() {
    return (
        <Slide>
            <Kicker>PUT IT TOGETHER</Kicker>
            <h2>
                Input → call →
                <br />
                return → display.
            </h2>
            <CodeBlock>
                {
                    'name = input("Name: ")\nscore = int(input("Score: "))\n\nlevel = get_level(score)\nprint("Welcome", name)\nprint("Level:", level)'
                }
            </CodeBlock>
            <p className="prompt">The main program can stay short because each function owns one job.</p>
        </Slide>
    );
}
