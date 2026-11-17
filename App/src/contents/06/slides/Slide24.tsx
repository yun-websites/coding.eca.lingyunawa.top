import QuestionSlide from "./QuestionSlide";

export default function Slide24() {
    return (
        <QuestionSlide
            number={24}
            title={"Two names for the same list"}
            code={"first = [1, 2]\nthird = first\nprint(first is third)"}
            output={"True"}
            explanation={
                "Assigning first to third does not copy the list. Both names refer to the same list object, so the identity check is true."
            }
            rule={"Assignment binds a name to an object; it does not automatically copy that object."}
        />
    );
}
