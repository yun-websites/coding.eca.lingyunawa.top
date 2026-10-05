import CodeBlock from "@/components/slides/CodeBlock";
import DarkSection from "@/components/slides/DarkSection";

export default function Slide11() {
    return (
        <DarkSection number="02 / NAME IT">
            <h2>
                Give information a <em>name</em>
            </h2>
            <p className="lead">
                A variable is like a labeled box: <br />
                the label is the name <br />
                and the contents are the value.
            </p>
            <CodeBlock className="dark-code">{'name = "Alex"\nclub = "ECA Coding Club"\n\nprint(name)\nprint(club)'}</CodeBlock>
        </DarkSection>
    );
}
