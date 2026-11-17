import QuestionSlide from "./QuestionSlide";

export default function Slide02() {
    return (
        <QuestionSlide
            number={2}
            title={"True plus False"}
            code={"print(True + False)"}
            output={"1"}
            explanation={"True behaves like 1 and False behaves like 0 in numeric operations. The calculation is 1 + 0."}
            rule={"True contributes 1; False contributes 0."}
        />
    );
}
