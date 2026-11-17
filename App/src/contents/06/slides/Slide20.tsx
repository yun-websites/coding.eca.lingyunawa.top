import QuestionSlide from "./QuestionSlide";

export default function Slide20() {
    return (
        <QuestionSlide
            number={20}
            title={"A non-empty string wins"}
            code={'print("Python" or "fallback")'}
            output={"Python"}
            explanation={
                "The string Python is non-empty and therefore truthy. or returns it immediately without evaluating the fallback."
            }
            rule={"or keeps the original value when that value is truthy."}
        />
    );
}
