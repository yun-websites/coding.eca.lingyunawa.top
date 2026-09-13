import CodeBlock from "../components/CodeBlock.jsx";
import Kicker from "../components/Kicker.jsx";
import Slide from "../components/Slide.jsx";

export default function Slide17() {
    return (
        <Slide className="project-slide">
            <Kicker>MINIMUM VIABLE VERSION</Kicker>
            <h2>Make it run first</h2>
            <CodeBlock>
                {
                    'name = "Alex"\nfavorite_thing = "basketball"\n\nprint("Welcome to my profile!")\nprint(name)\nprint(favorite_thing)'
                }
            </CodeBlock>
            <ul className="requirements" style={{ "marginLeft": "-1rem" }}>
                <li>At least two variables</li>
                <li>At least two <code>print()</code> calls</li>
                <li>Runs without errors</li>
            </ul>
        </Slide>
    );
}
