import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide17() {
    return (
        <Slide>
            <Kicker>EXIT TICKET · 4 MIN</Kicker>
            <h2>Check your understanding independently.</h2>
            <div className="exit-grid">
                <div>
                    <b>01</b>
                    <p>What type does `input()` return?</p>
                </div>
                <div>
                    <b>02</b>
                    <p>Write `age = int(input(...))`.</p>
                </div>
                <div>
                    <b>03</b>
                    <p>Read `city` from `person`.</p>
                </div>
                <div>
                    <b>04</b>
                    <p>What does `items[0]` mean?</p>
                </div>
            </div>
        </Slide>
    );
}
