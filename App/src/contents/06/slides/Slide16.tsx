import QuestionSlide from "./QuestionSlide";

export default function Slide16() {
    return (
        <QuestionSlide
            number={16}
            title={"and stops at a false value"}
            code={'print(False and "hello")'}
            output={"False"}
            explanation={"The left operand is False, so and returns it immediately. The string on the right is not evaluated."}
            rule={"and returns the first falsy operand, or the last operand if all are truthy."}
        />
    );
}
