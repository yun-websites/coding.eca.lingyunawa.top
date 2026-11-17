import QuestionSlide from "./QuestionSlide";

export default function Slide11() {
    return (
        <QuestionSlide
            number={11}
            title={"Unpacking the Boolean puzzle"}
            code={"print(True < False + False > True)"}
            output={"False"}
            explanation={
                "Addition happens first: False + False gives 0. The chain then starts with True < 0, equivalent to 1 < 0. That is false, so Python skips the remaining comparison."
            }
            rule={
                "Read the chain as True < (False + False) and (False + False) > True; its middle expression is evaluated only once."
            }
        />
    );
}
