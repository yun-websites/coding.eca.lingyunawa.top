import QuestionSlide from "./QuestionSlide";

export default function Slide06() {
    return (
        <QuestionSlide
            number={6}
            title={"A comparison joins the calculation"}
            code={"print(3 + (True == True))"}
            output={"4"}
            explanation={
                "The comparison inside the parentheses is evaluated first. True == True gives True, so the addition becomes 3 + 1."
            }
            rule={"A comparison returns a Boolean, which can then participate in arithmetic."}
        />
    );
}
