import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide08() {
    return (
        <Slide>
            <Kicker>QUICK PRACTICE · 3 MIN</Kicker>
            <h2>Match the value to its type.</h2>
            <div className="quote-card">
                <p>"blue" &nbsp; 42 &nbsp; 3.14</p>
                <p>["red", "blue"]</p>
                <p>{'{"subject": "Python"}'} &nbsp; (31.2, 120.6)</p>
            </div>
            <p className="hint">Write: `str`, `int`, `float`, `list`, `dict`, or `tuple`.</p>
        </Slide>
    );
}
