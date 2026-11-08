import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide02() {
    return (
        <Slide>
            <Kicker>THE BIG IDEA</Kicker>
            <h2>
                Do not build
                <br />
                every tool yourself.
            </h2>
            <p className="lead">
                Python comes with reusable tools. We can bring them into our program and call them when we need them.
            </p>
            <div className="callout">
                <strong>Today:</strong> import a module, call one of its functions, and combine it with your own functions.
            </div>
        </Slide>
    );
}
