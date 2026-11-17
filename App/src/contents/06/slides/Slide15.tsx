import QuestionSlide from "./QuestionSlide";

export default function Slide15() {
    return (
        <QuestionSlide
            number={15}
            title={"Parentheses change the order"}
            code={"print((2 + 3) * 4)"}
            output={"20"}
            explanation={"Python evaluates the parentheses first: 2 + 3 gives 5. Multiplying 5 by 4 gives 20."}
            rule={"Parentheses make the intended grouping explicit."}
        />
    );
}
