import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide12() {
    return (
        <Slide>
            <Kicker>TUPLE · FIXED SEQUENCE</Kicker>
            <h2>
                Keep a small set <br />
                of values together.
            </h2>
            <CodeBlock>
                {"location = (31.2, 120.6)\nlatitude, longitude = location\n\nprint(latitude)\nprint(longitude)"}
            </CodeBlock>
            <p className="tip">
                Tuples keep order. <br />
                Use them for data that this program will not change.
            </p>
        </Slide>
    );
}

