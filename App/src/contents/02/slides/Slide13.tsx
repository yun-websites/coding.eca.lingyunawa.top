import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide13() {
    return (
        <Slide>
            <Kicker>TYPE DETECTIVE · 4 MIN</Kicker>
            <h2>Read the value before choosing the operation.</h2>
            <div className="split">
                <pre>
                    <code>
                        {
                            'subject = "Python"\nlessons = 6\nrating = 4.5\ntools = ["editor", "terminal"]\nbook = {"title": "Code"}\nsize = (1920, 1080)'
                        }
                    </code>
                </pre>
                <div className="repair-rules">
                    <p>Which type is each variable?</p>
                    <p>How would you read one item from `tools`?</p>
                    <p>How would you read the title from `book`?</p>
                </div>
            </div>
        </Slide>
    );
}
