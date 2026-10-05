import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide09() {
    return (
        <Stack>
            <Slide>
                <Kicker>DEBUGGING IS INFORMATION</Kicker>
                <h2>Errors are clues, not failure</h2>
                <div className="error-grid">
                    <div className="error-card">
                        <div className="error-title">NameError</div>
                        <CodeBlock>print(Hello)</CodeBlock>
                        <p>
                            Python treats <code>Hello</code> as a variable name.
                        </p>
                        <div className="fix">
                            Correct version 👉{" "}
                            <code>
                                print(<b>"</b>Hello<b>"</b>)
                            </code>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>DEBUGGING IS INFORMATION</Kicker>
                <h2>Errors are clues, not failure</h2>
                <div className="error-grid">
                    <div className="error-card">
                        <div className="error-title">SyntaxError</div>
                        <CodeBlock>print("Hello)</CodeBlock>
                        <p>Quotation marks must come in pairs, so Python cannot find the end of the line.</p>
                        <div className="fix">
                            Correct version 👉{" "}
                            <code>
                                print("Hello<b>"</b>)
                            </code>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>DEBUGGING IS INFORMATION</Kicker>
                <h2>Errors are clues, not failure</h2>
                <p className="tip">
                    Useful Tip: Read the last line of the error first; it usually tells you what Python is complaining about.
                </p>
            </Slide>
        </Stack>
    );
}
