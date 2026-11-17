import QuestionSlide from "./QuestionSlide";

export default function Slide19() {
    return (
        <QuestionSlide
            number={19}
            title={"An empty string selects the fallback"}
            code={'print("" or "fallback")'}
            output={"fallback"}
            explanation={
                "An empty string is falsy. Because the left operand is falsy, or evaluates and returns the fallback string."
            }
            rule={"An empty string can trigger a default value when used with or."}
        />
    );
}
