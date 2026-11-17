import QuestionSlide from "./QuestionSlide";

export default function Slide22() {
    return (
        <QuestionSlide
            number={22}
            title={"Equal contents"}
            code={"first = [1, 2]\nsecond = [1, 2]\nprint(first == second)"}
            output={"True"}
            explanation={
                "These are two separately created lists, but they contain equal elements in the same order. List equality compares their contents."
            }
            rule={"Use == to compare the values of lists."}
        />
    );
}
