import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide12() {
    return (
        <Slide>
            <Kicker>EXIT CHECK</Kicker>
            <h2>Can you explain your import?</h2>
            <div className="check-grid">
                <div className="check">
                    □ I used <code>import module</code>.
                </div>
                <div className="check">
                    □ I used <code>from module import function</code>.
                </div>
                <div className="check">□ I matched each call to its import.</div>
                <div className="check">□ I combined a library function with my own function.</div>
            </div>
            <p className="lead">Next: put your own reusable code in a separate Python file.</p>
        </Slide>
    );
}
