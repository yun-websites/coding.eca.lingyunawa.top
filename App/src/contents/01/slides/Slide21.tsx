import NumberedSlide from "@/components/slides/NumberedSlide";
import { Stack } from "@revealjs/react";

export default function Slide21() {
    return (
        <Stack>
            <NumberedSlide number="04 / SHOW IT">
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
            </NumberedSlide>
            <NumberedSlide number="04 / SHOW IT">
                <h2>Conclusion</h2>
                <p className="lead">
                    Programs are not magic: put information in variables, then ask Python to display it with{" "}
                    <code>print()</code>.
                </p>
            </NumberedSlide>
        </Stack>
    );
}
