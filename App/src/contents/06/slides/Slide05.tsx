import QuestionSlide from "./QuestionSlide";

export default function Slide05() {
    return (
        <QuestionSlide
            number={5}
            title={"Truthy does not mean equal to True"}
            code={"print(2 == True)"}
            output={"False"}
            explanation={
                "Although 2 is treated as true in a condition, it is not equal to the numeric value of True, which is 1."
            }
            rule={"Being truthy and being equal to True are different checks."}
        />
    );
}
