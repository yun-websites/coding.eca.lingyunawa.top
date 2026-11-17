import QuestionSlide from "./QuestionSlide";

export default function Slide07() {
    return (
        <QuestionSlide
            number={7}
            title={"Two comparisons, one chain"}
            code={"print(1 < 2 < 3)"}
            output={"True"}
            explanation={
                "Both adjacent comparisons must hold: 1 < 2 and 2 < 3. They are both true, so the whole chain is true."
            }
            rule={"A comparison chain does not feed the first Boolean result into the next comparison."}
        />
    );
}
