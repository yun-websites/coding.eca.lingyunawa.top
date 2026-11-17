import QuestionSlide from "./QuestionSlide";

export default function Slide18() {
    return (
        <QuestionSlide
            number={18}
            title={"or looks for a truthy value"}
            code={'print(False or "hello")'}
            output={"hello"}
            explanation={"False is falsy, so or evaluates and returns the right operand. The result is the string hello."}
            rule={"or returns the first truthy operand, or the last operand if all are falsy."}
        />
    );
}
