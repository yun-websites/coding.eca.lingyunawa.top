import QuestionSlide from "./QuestionSlide";

export default function Slide08() {
    return (
        <QuestionSlide
            number={8}
            title={"One failed comparison breaks the chain"}
            code={"print(1 < 2 > 3)"}
            output={"False"}
            explanation={
                "The first comparison, 1 < 2, is true. The second comparison, 2 > 3, is false, so the whole chain is false."
            }
            rule={"Read this as 1 < 2 and 2 > 3."}
        />
    );
}
