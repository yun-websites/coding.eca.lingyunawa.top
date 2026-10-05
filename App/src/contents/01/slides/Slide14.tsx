import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide14() {
    return (
        <section>
            <Slide>
                <Kicker>NAMING RULES</Kicker>
                <h2>Three variable naming rules</h2>
                <div className="rules">
                    <div>
                        <span>01</span>
                        <p>
                            Use only <strong>letters, numbers, and underscores</strong>.
                        </p>
                        <code>student_name</code> ✅
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>NAMING RULES</Kicker>
                <h2>Three variable naming rules</h2>
                <div className="rules">
                    <div>
                        <span>02</span>
                        <p>
                            Do not start with <strong>a number</strong>.
                        </p>
                        <code>2students</code> ❌
                        <br />
                        <code>student2</code> ✅
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>NAMING RULES</Kicker>
                <h2>Three variable naming rules</h2>
                <div className="rules">
                    <div>
                        <span>03</span>
                        <p>
                            Do not use <strong>hyphens</strong> <code>-</code>.
                            <br />
                            Use <strong>underscores</strong> <code>_</code> instead.
                        </p>
                        <code>my-score</code> ❌
                        <br />
                        <code>my_score</code> ✅
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>NAMING RULES</Kicker>
                <h2>Three variable naming rules</h2>
                <p className="tip">
                    A good name should explain its purpose: <code>student_name</code> is clearer than <code>x</code>.
                </p>
            </Slide>
        </section>
    );
}
