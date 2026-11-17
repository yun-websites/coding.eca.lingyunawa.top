import QuestionSlide from "./QuestionSlide";

export default function Slide17() {
    return (
        <QuestionSlide
            number={17}
            title={"and can return a string"}
            code={'print(True and "hello")'}
            output={"hello"}
            explanation={
                "True is truthy, so Python evaluates and returns the right operand: the string hello. print displays the string without quotation marks."
            }
            rule={"and returns an operand; it does not always return True or False."}
        />
    );
}
