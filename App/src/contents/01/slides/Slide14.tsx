import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide14() {
    return (
        <Stack>
            <Slide>
                <Kicker>NAMING RULES</Kicker>
                <h2>Three variable naming rules</h2>
                <div className="rules">
                    <div>
                        <span>01</span>
                        <p>
                            Use only <strong>letters, numbers, and underscores</strong>.
                        </p>
                        <InlineCode>student_name</InlineCode> ✅
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
                        <InlineCode>2students</InlineCode> ❌
                        <br />
                        <InlineCode>student2</InlineCode> ✅
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
                            Do not use <strong>hyphens</strong> <InlineCode>-</InlineCode>.
                            <br />
                            Use <strong>underscores</strong> <InlineCode>_</InlineCode> instead.
                        </p>
                        <InlineCode>my-score</InlineCode> ❌
                        <br />
                        <InlineCode>my_score</InlineCode> ✅
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>NAMING RULES</Kicker>
                <h2>Three variable naming rules</h2>
                <p className="tip">
                    A good name should explain its purpose: <InlineCode>student_name</InlineCode> is clearer than{" "}
                    <InlineCode>x</InlineCode>.
                </p>
            </Slide>
        </Stack>
    );
}
