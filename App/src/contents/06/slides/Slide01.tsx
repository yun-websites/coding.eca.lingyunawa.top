import QuestionSlide from "./QuestionSlide";

export default function Slide01() {
    return (
        <QuestionSlide
            number={1}
            title={"Booleans can add up"}
            code={"print(True + True)"}
            output={"2"}
            explanation={
                "In numeric operations, True behaves like 1. Adding True to True therefore gives 1 + 1, which is the integer 2."
            }
            rule={"Boolean arithmetic produces a number here, not another Boolean."}
        />
    );
}
