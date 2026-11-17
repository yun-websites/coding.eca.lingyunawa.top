import QuestionSlide from "./QuestionSlide";

export default function Slide14() {
    return (
        <QuestionSlide
            number={14}
            title={"Multiply before adding"}
            code={"print(2 + 3 * 4)"}
            output={"14"}
            explanation={"Python evaluates 3 * 4 first, giving 12. It then adds 2 to get 14."}
            rule={"Multiplication has higher precedence than addition."}
        />
    );
}
