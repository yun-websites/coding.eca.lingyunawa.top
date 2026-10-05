import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide18() {
    return (
        <Slide className="project-slide">
            <Kicker>MAKE IT YOURS</Kicker>
            <h2>
                Your welcome card <br />
                could look like this
            </h2>
            <CodeBlock>
                {
                    'name = "Alex"\ngrade = 9\nfavorite_thing = "basketball"\n\nprint("--- My Welcome Card ---")\nprint("Name:")\nprint(name)\nprint("Grade:")\nprint(grade)\nprint("I like:")\nprint(favorite_thing)'
                }
            </CodeBlock>
        </Slide>
    );
}
