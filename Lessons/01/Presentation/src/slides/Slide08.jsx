import Kicker from "../components/Kicker.jsx";
import Slide from "../components/Slide.jsx";

export default function Slide08() {
    return (
        <Slide className="challenge-slide" backgroundColor="#f2b84b">
            <Kicker dark>TRY IT · 2 MIN</Kicker>
            <h2>Quick Practice 1</h2>
            <p className="challenge-text">Write two lines of code that output:</p>
            <div className="quote-card">
                <div>I can code.</div>
                <div>Python is fun.</div>
            </div>
            <p className="hint">
                Check: quotation marks, parentheses, and the second print line
            </p>
        </Slide>
    );
}
