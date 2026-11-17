import QuestionSlide from "./QuestionSlide";

export default function Slide23() {
    return (
        <QuestionSlide
            number={23}
            title={"Equal lists, different objects"}
            code={"first = [1, 2]\nsecond = [1, 2]\nprint(first is second)"}
            output={"False"}
            explanation={
                "Each list literal creates a separate list. Their contents match, but first and second refer to different objects."
            }
            rule={"is checks object identity, not whether the contents are equal."}
        />
    );
}
