import QuestionSlide from "./QuestionSlide";

export default function Slide12() {
    return (
        <QuestionSlide
            number={12}
            title={"The minus sign comes after the power"}
            code={"print(-2 ** 2)"}
            output={"-4"}
            explanation={
                "Exponentiation takes priority over the leading minus sign. Python reads this as -(2 ** 2), which gives -4."
            }
            rule={"Use parentheses when you want a negative number to be the base."}
        />
    );
}
