import DarkSection from "@/components/slides/DarkSection";

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
                    Point to one variable and say what it stores.
                    <br />
                    Why does this text need quotation marks?
                    <br />
                    Which value did you change?
                    <br />
                    What changed in the output?
                </div>
            </DarkSection>
            <DarkSection number="04 / SHOW IT">
                <h2>Conclusion</h2>
                <p className="lead">
                    Programs are not magic: put information in variables, then ask Python to display it with{" "}
                    <code>print()</code>.
                </p>
            </DarkSection>
        </section>
    );
}
