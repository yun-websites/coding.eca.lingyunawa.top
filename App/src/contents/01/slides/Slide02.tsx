import NumberedSlide from "@/components/slides/NumberedSlide";

export default function Slide02() {
    return (
        <NumberedSlide number="01 / START">
            <h2>
                Today, you will build <br />a <em>welcome card</em>
            </h2>
            <p className="lead">
                First, make Python show one sentence, name your information, and combine it into a shareable personal card.
            </p>
        </NumberedSlide>
    );
}
