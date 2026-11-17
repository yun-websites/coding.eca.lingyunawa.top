import QuestionSlide from "./QuestionSlide";

export default function Slide13() {
    return (
        <QuestionSlide
            number={13}
            title={"Parentheses change the base"}
            code={"print((-2) ** 2)"}
            output={"4"}
            explanation={"The parentheses make -2 the base of the power. Squaring it gives (-2) * (-2), which is 4."}
            rule={"(-2) ** 2 and -(2 ** 2) describe different calculations."}
        />
    );
}
