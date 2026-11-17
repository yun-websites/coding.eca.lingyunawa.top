import QuestionSlide from "./QuestionSlide";

export default function Slide03() {
    return (
        <QuestionSlide
            number={3}
            title={"False times anything"}
            code={"print(False * 10)"}
            output={"0"}
            explanation={"False behaves like 0 in multiplication. Multiplying 0 by 10 gives the integer 0."}
            rule={"The printed result is 0, even though one operand was a Boolean."}
        />
    );
}
