import QuestionSlide from "./QuestionSlide";

export default function Slide21() {
    return (
        <QuestionSlide
            number={21}
            title={"Short-circuiting avoids the division"}
            code={"print(False and (1 / 0))"}
            output={"False"}
            explanation={
                "The left operand of and is False, so Python returns it without evaluating 1 / 0. The division never happens, so there is no error."
            }
            rule={"Short-circuiting means the right operand is evaluated only when needed."}
        />
    );
}
