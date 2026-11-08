import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide07() {
    return (
        <Slide>
            <Kicker>COMPARE · TWO VALID STYLES</Kicker>
            <h2>Same tool. Different call.</h2>
            <div className="compare-grid">
                <div className="callout">
                    <p>
                        <code>import random</code>
                    </p>
                    <p>
                        <code>random.randint(1, 6)</code>
                    </p>
                </div>
                <div className="callout">
                    <p>
                        <code>from random import randint</code>
                    </p>
                    <p>
                        <code>randint(1, 6)</code>
                    </p>
                </div>
            </div>
            <p className="tip">Match your call to your import. Do not mix the two styles by accident.</p>
        </Slide>
    );
}
