import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide03() {
    return (
        <Slide>
            <Kicker>LEARNING TARGETS</Kicker>
            <h2>
                Six types. <br />A few useful moves.
            </h2>
            <div className="goal-grid">
                <div className="goal">
                    <b>str</b> <span>text</span>
                </div>
                <div className="goal">
                    <b>int</b> <span>whole numbers</span>
                </div>
                <div className="goal">
                    <b>float</b> <span>decimal numbers</span>
                </div>
                <div className="goal">
                    <b>list</b> <span>ordered collection</span>
                </div>
                <div className="goal">
                    <b>dict</b> <span>key/value data</span>
                </div>
                <div className="goal">
                    <b>tuple</b> <span>fixed sequence</span>
                </div>
            </div>
        </Slide>
    );
}
