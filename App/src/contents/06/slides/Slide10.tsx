import QuestionSlide from "./QuestionSlide";

export default function Slide10() {
    return (
        <QuestionSlide
            number={10}
            title={"Equality can join a chain"}
            code={"print(1 == True < 2)"}
            output={"True"}
            explanation={
                "This checks 1 == True and True < 2. The first comparison is true because True equals 1; the second is true because 1 < 2."
            }
            rule={"Equality and ordering comparisons can appear in the same chain."}
        />
    );
}
