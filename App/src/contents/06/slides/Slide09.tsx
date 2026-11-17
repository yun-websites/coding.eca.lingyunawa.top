import QuestionSlide from "./QuestionSlide";

export default function Slide09() {
    return (
        <QuestionSlide
            number={9}
            title={"Comparison chains work backwards too"}
            code={"print(3 > 2 > 1)"}
            output={"True"}
            explanation={"The chain checks 3 > 2 and 2 > 1. Both comparisons are true."}
            rule={"The direction can change, but every adjacent comparison must succeed."}
        />
    );
}
