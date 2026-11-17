import QuestionSlide from "./QuestionSlide";

export default function Slide04() {
    return (
        <QuestionSlide
            number={4}
            title={"One equals True"}
            code={"print(1 == True)"}
            output={"True"}
            explanation={
                "Python allows numeric equality comparisons between integers and Booleans. True has the numeric value 1, so these values compare equal."
            }
            rule={"== compares values; the two values do not need to have the same type."}
        />
    );
}
