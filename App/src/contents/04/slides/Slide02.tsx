import NumberedSlide from "@/components/slides/NumberedSlide";

export default function Slide02() {
    return (
        <NumberedSlide number="01 / REUSE YOUR LOGIC">
            <h2>
                Name a group of steps.
                <br />
                <em>Use it again.</em>
            </h2>
            <p className="lead">
                A function packages instructions under a name. Today you will turn repeated logic into reusable building blocks.
            </p>
        </NumberedSlide>
    );
}
