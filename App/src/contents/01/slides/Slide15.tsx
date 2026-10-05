import type { CSSProperties } from "react";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

const challengeStyle = { "--r-bold-color": "#ffff87" } as CSSProperties;

export default function Slide15() {
    return (
        <Stack style={challengeStyle}>
            <Slide className="challenge-slide" backgroundColor="#9ed8c2">
                <Kicker dark>QUICK CHECK</Kicker>
                <h2>Write ✅ or ❌</h2>
                <div className="name-check">
                    {[["name"], ["student_name"], ["2students"], ["my-score"], ["age2"]].map(([name]) => (
                        <div key={name}>
                            <b>{name}</b>
                        </div>
                    ))}
                </div>
                <p className="hint">
                    Hint: Underscores are allowed; hyphens are not; <br />a name cannot start with a number.
                </p>
            </Slide>
            <Slide className="challenge-slide" backgroundColor="#9ed8c2">
                <Kicker dark>QUICK CHECK</Kicker>
                <h2>Write ✅ or ❌</h2>
                <div className="name-check">
                    {[
                        ["name", "✅"],
                        ["student_name", "✅"],
                        ["2students", "❌"],
                        ["my-score", "❌"],
                        ["age2", "✅"],
                    ].map(([name, answer]) => (
                        <div key={name}>
                            <b>{name}</b> {answer}
                        </div>
                    ))}
                </div>
                <p className="hint">
                    Hint: Underscores are allowed; hyphens are not; <br />a name cannot start with a number.
                </p>
            </Slide>
        </Stack>
    );
}
