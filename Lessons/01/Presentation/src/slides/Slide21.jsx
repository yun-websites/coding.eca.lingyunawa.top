import DarkSection from "../components/DarkSection.jsx";

export default function Slide21() {
    return (
        <section>
            <DarkSection number="04 / SHOW IT">
                <h2>
                    Share your code and
                    <br />
                    <em>Explain one choice clearly</em>
                </h2>
                <div className="share-prompts">
                    <div>Point to one variable and say what it stores.</div>
                    <div>Why does this text need quotation marks?</div>
                    <div>
                        Which value did you change? What changed in the output?
                    </div>
                </div>
            </DarkSection>
            <DarkSection number="04 / SHOW IT">
                <h2>Conclusion</h2>
                <p className="lead">
                    Programs are not magic: put information in variables, then
                    ask Python to display it with <code>print()</code>.
                </p>
            </DarkSection>
        </section>
    );
}
